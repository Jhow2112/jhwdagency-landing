/**
 * Formspree auto-acknowledgment for Aralo Studio.
 * Watches Gmail for new Formspree submission emails and replies to the
 * customer automatically from your own address. Free; runs on a timer.
 *
 * SETUP (one time, ~5 min):
 *   1. script.google.com -> New project. Paste this file in.
 *   2. Save, then Run `autoReplyToFormspreeLeads` once to authorize Gmail access.
 *   3. Triggers (clock icon) -> Add Trigger -> autoReplyToFormspreeLeads,
 *      Time-driven, Minutes timer, Every 5 minutes.
 *   4. Test: submit the form yourself, Run manually, confirm the reply arrives.
 *
 * NOTES:
 *   - Sends from your own Gmail (better deliverability than Formspree's autoresponder).
 *   - Free Gmail quota is ~100 sent/day; Workspace is 1,500.
 *   - Adds a "Formspree/AutoReplied" label so no lead is emailed twice.
 *   - Only looks back 2 days, so old threads won't get blasted.
 */

// -- Settings you can tweak ------------------------------------------
var FROM_NAME    = "Aralo Studio";
var REPLY_TO     = "info@aralostudio.com";
var PHONE        = "(208) 615-2884";
var CALENDLY_URL = "https://calendly.com/jeremyhowardwebdesign-info/30min";
var PROCESSED_LABEL = "Formspree/AutoReplied"; // created automatically
// --------------------------------------------------------------------

function autoReplyToFormspreeLeads() {
  var label = GmailApp.getUserLabelByName(PROCESSED_LABEL) ||
              GmailApp.createLabel(PROCESSED_LABEL);

  // Only look at recent Formspree mail we haven't already answered.
  var query = 'from:formspree.io newer_than:2d -label:"' + PROCESSED_LABEL + '"';
  var threads = GmailApp.search(query, 0, 50);

  threads.forEach(function (thread) {
    var msg = thread.getMessages()[0];

    // Formspree sets Reply-To to the person who submitted the form.
    var customerEmail = extractEmail_(msg.getReplyTo());
    if (!customerEmail || customerEmail.indexOf("formspree.io") !== -1) {
      // Couldn't find a real customer address -- skip but mark done
      // so we don't keep retrying the same message.
      thread.addLabel(label);
      return;
    }

    var body      = msg.getPlainBody();
    var firstName = firstName_(findField_(body, "name"));
    var isPreview = /free-?preview/i.test(body);

    var subject = isPreview
      ? "We've got your free preview request -- Aralo Studio"
      : "Thanks for reaching out -- Aralo Studio";

    var greeting = firstName ? "Hi " + firstName + "," : "Hi there,";

    var message = isPreview
      ? greeting + "\n\n" +
        "Thanks for requesting a free homepage preview -- it came through and we're on it.\n\n" +
        "We'll design something custom for your business and have it in your inbox within 48 hours. " +
        "No cost, no obligation: like it and we'll build the full site, don't and you walk away.\n\n" +
        "Want to chat sooner? Grab a quick call here: " + CALENDLY_URL + "\n\n" +
        "Talk soon,\nJeremy\n" + FROM_NAME + "\n" + REPLY_TO + " - " + PHONE
      : greeting + "\n\n" +
        "Thanks for reaching out to " + FROM_NAME + " -- your message came through and we've got it.\n\n" +
        "We'll personally reply within one business day to set up your free consultation.\n\n" +
        "If it's easier to grab a time now, you can book a quick call here: " + CALENDLY_URL + "\n\n" +
        "Talk soon,\nJeremy\n" + FROM_NAME + "\n" + REPLY_TO + " - " + PHONE;

    GmailApp.sendEmail(customerEmail, subject, message, {
      name: FROM_NAME,
      replyTo: REPLY_TO
    });

    thread.addLabel(label);
  });
}

// Pull a bare email address out of a "Name <addr>" or "addr" string.
function extractEmail_(raw) {
  if (!raw) return "";
  var m = raw.match(/[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}/);
  return m ? m[0].toLowerCase() : "";
}

// Find a Formspree field value by key, e.g. findField_(body, "name").
// Matches "name: Jane" but not "businessName: Acme".
function findField_(body, key) {
  var re = new RegExp("(^|\\n)\\s*" + key + "\\s*[:\\-]\\s*(.+)", "i");
  var m = body.match(re);
  return m ? m[2].trim() : "";
}

function firstName_(fullName) {
  if (!fullName) return "";
  return fullName.split(/\s+/)[0];
}
