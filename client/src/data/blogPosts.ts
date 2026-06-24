/* Blog post data — Aralo Studio
   Single source of truth for all blog posts.
   Used by:
     - App.tsx (Wouter routes)
     - entry-server.tsx (SSR rendering)
     - prerender.mjs (per-route meta tags + sitemap, via tsx)
     - BlogListPage.tsx, BlogTeaserSection.tsx (rendering)
   To add a new post: append to BLOG_POSTS below.
   Slug must NOT include the "/blog/" prefix or any trailing slash.
   Body is plain markdown — supports headings (## ###), bold (**),
   italic (*), inline links [text](url), unordered lists (-),
   blockquotes (>), and paragraphs. Rendered with `marked`. */

export type BlogPost = {
  /** URL slug, no slashes. Final path will be /blog/{slug}/ */
  slug: string;
  /** Post title — also used as <h1> and og:title */
  title: string;
  /** ISO date string, e.g. "2026-05-02". Drives sort order + dateline display. */
  date: string;
  /** Display-friendly category, shown as a tag. */
  category: string;
  /** Path to header image, served from /public. e.g. "/blog/blog-header-01.png" */
  headerImage: string;
  /** Optional alt text override. Defaults to the post title. */
  headerImageAlt?: string;
  /** Optional excerpt override (~150 chars). If absent, derived from body. */
  excerpt?: string;
  /** Markdown body — no leading h1, no metadata lines. */
  body: string;
};

const POST_1_BODY = `Short answer: yes. But not for the reasons most web designers will tell you.

The typical pitch goes something like this: "You need a website because everyone has one." That's lazy reasoning. Plenty of successful businesses in the [Treasure Valley](/web-design-meridian/) have operated for years without a website. Some of the best contractors in Boise have never touched a computer and they're booked solid through referrals.

So why bother?

## The real reason is trust verification

When someone hears about your business, whether from a friend, a yard sign, a truck wrap, or a Google search, the first thing they do is look you up. Not to browse your services page. Not to read your blog. They're checking that you're real.

They Google your business name. If they find a professional-looking website with your name, phone number, services, and maybe a photo or two, they call you. If they find nothing, or they find a half-finished Wix site from 2019, they move on to the next option. That decision happens in about 10 seconds.

This isn't speculation. Talk to any business owner in Boise who's asked a new customer "how did you find us?" and you'll hear some version of "my neighbor recommended you, so I Googled you to make sure you were legit."

## What about just using Facebook?

A lot of Boise businesses use their Facebook page as their website. It's free, it's easy to update, and most of their customers are on Facebook anyway.

The problem is that Facebook pages don't show up reliably in Google search results. When someone searches "plumber Boise Idaho," Google shows websites, Google Business Profiles, and map results. Facebook pages occasionally appear, but they're buried. You're invisible to anyone who searches instead of scrolling social media.

Facebook also controls your page. They can change the layout, limit your reach, or require you to pay for people to see your posts. Your website is yours.

## What about Google Business Profile alone?

A [Google Business Profile](/seo-aeo/) is essential, and every local business should have one. But a GBP without a website is like a business card without a phone number. The profile gets people interested. The website closes the deal.

Google also favors businesses that have a website linked to their GBP. The website gives Google more information about what you do, where you serve, and why someone should choose you. That additional context helps you rank higher in local search results.

## What a small business website actually needs

Not much. The businesses that overthink this are the ones that never launch. Here's what matters:

Your business name and what you do, stated clearly. Your phone number and email, visible on every page. Your service area. A few photos of your work or your team. A way for someone to contact you.

That's it. You don't need a blog, an online store, an appointment scheduler, or animations. You need a clean, professional page that loads fast on a phone and tells people how to hire you.

## The cost question

A professional website for a small business in Boise doesn't need to cost $5,000 or take two months. That's agency pricing for agency-sized businesses. A solo plumber, a two-person cleaning crew, or a landscaper with a truck doesn't need an agency. They need a straightforward site that works, built fast, at a price that makes sense for their business.

At Aralo Studio, we build sites like this [starting at $495](/#pricing), live in 5-10 business days, with hosting and maintenance included. But regardless of who builds it, the important thing is that it exists and that it looks professional enough to not lose you the customer who just Googled your name.

## The bottom line

You don't need a website because "everyone has one." You need a website because people are already searching for you. The question is what they find when they do.

If the answer is "nothing," you're handing customers to your competitors who bothered to put something up. In a market like Boise where word-of-mouth is king, your website isn't replacing referrals. It's the thing that converts referrals into calls.`;

const POST_2_BODY = `You search your own business on Google and you're nowhere. Then you search your competitor, the one who does the same work as you, maybe not even as well, and they're right there at the top. Map listing, website link, reviews, phone number. Ready to be called.

This isn't random. Google doesn't pick favorites. It follows a set of rules, and the businesses that show up are the ones that checked the boxes. Here's what they did that you probably haven't.

## They have a Google Business Profile that's actually filled out

Most [businesses in the Treasure Valley](/web-design-boise/) have claimed their [Google Business Profile](/seo-aeo/). But claiming it and completing it are two different things. Your competitor probably filled out every field: business hours, service list, service area, photos, business description, and categories. Google treats a complete profile as more trustworthy than a bare one.

Check yours right now. Go to business.google.com and look at your profile. Is your service area set correctly? Do you have more than one or two photos? Have you selected the right primary and secondary categories? Is your phone number correct? These details matter more than most people realize.

## They have a real website

A [real website](/#services), even a simple one, gives Google something to connect to your Business Profile. When Google sees a GBP listing linked to a website that mentions the same services, same phone number, and same location, it gains confidence that your business is legitimate and relevant.

If you don't have a website, or your website is a broken WordPress page from 2017, Google has less information to work with. Less information means less confidence. Less confidence means lower ranking.

## They have reviews (and they respond to them)

Reviews are one of the strongest ranking signals for [local search](/active-seo/). A business with 30 reviews and a 4.7 rating will almost always outrank a business with 3 reviews and a 5.0 rating. Volume matters more than perfection.

Your competitors are probably asking for reviews. After every job, they send a text or an email: "Thanks for choosing us. If you have a minute, a Google review would mean a lot." That's it. No gimmick, no incentive, just a simple ask.

And when someone leaves a review, they respond. Google notices this. A business that actively engages with reviews signals that it's alive, active, and cares about customer experience.

## Their website mentions what they do and where they do it

This is where a lot of businesses miss an easy win. Your competitor's website probably says something like "We provide residential plumbing services in Boise, Meridian, Nampa, and the surrounding Treasure Valley." That sentence does more work than you'd think.

When someone searches "plumber Meridian Idaho," Google scans websites for those exact words. If your website doesn't mention Meridian, you won't show up for that search. It's that simple.

This doesn't mean stuffing your site with keywords. It means clearly stating what you do and where you do it, in normal sentences, on your homepage and service pages.

## They're listed in more places than just Google

Google cross-references your business information across the internet. If your name, address, and phone number appear consistently on Yelp, the BBB, Apple Maps, Facebook, and industry directories, Google gains more confidence in your legitimacy.

Your competitor probably has listings on 5-10 of these platforms. You might only be on Google and Facebook. Each additional consistent listing is a small signal that adds up.

## What you can do about it this week

This isn't a six-month project. You can close a lot of the gap in a few hours:

Complete your Google Business Profile. Every field, every section. Add at least 5 photos. Write a real business description.

Ask your last 5 happy customers for a review. Send them the direct link to your Google review page. Most will do it if you make it easy.

Make sure your website mentions your services and your service area by name. If you don't have a website, that's the bigger problem to solve first.

Check your business info on Yelp, Facebook, and Apple Maps. Make sure the name, address, and phone number match exactly what's on your Google Business Profile.

None of this is complicated. Your competitors aren't doing anything clever. They're just doing the basics consistently, and that's enough to outrank a business that hasn't done them at all.`;

const POST_3_BODY = `You fix furnaces for a living. You're not thinking about websites. But here's what happens every day in the [Treasure Valley](/web-design-meridian/): someone's heat goes out at 9pm, they grab their phone, search "HVAC repair near me," and they call the first company that looks professional and has a phone number they can tap.

If that's not you, it's someone else. And that someone else isn't necessarily better at HVAC work. They just have a better website.

## The 10-second test

When a homeowner lands on your website, they make a decision in about 10 seconds. They're not reading your company history. They're not comparing service packages. They're answering three questions:

Does this company do what I need? Are they in my area? Can I call them right now?

If your website answers all three within 10 seconds, they call. If it doesn't, they hit the back button and try the next result. That's the entire game.

## What actually needs to be on the page

**Your phone number, tappable, at the top of every page.** This is the most important element on your website. Not your logo. Not your tagline. Your phone number. It should be visible without scrolling, and on mobile it should be a tap-to-call link. A homeowner with no heat at 9pm is not going to hunt through your site for a contact page.

**What you do, stated plainly.** "Residential and commercial HVAC repair, installation, and maintenance in the Treasure Valley." That sentence tells Google and the customer everything they need to know. Don't bury your services in vague language like "comprehensive climate solutions." Nobody searches for that.

**Your service area.** List the cities you serve. Boise, Meridian, Nampa, Eagle, Caldwell, Star, Kuna. Each city name on your site is a search term Google can match. If you don't mention Nampa on your website, you won't show up when someone in Nampa searches for HVAC help.

**A few photos of your team or your work.** Not stock photos. Real photos of your trucks, your technicians, your completed installations. A customer choosing between two HVAC companies will pick the one that looks like real people over the one using generic stock images of models in hard hats.

**Your hours and availability.** Do you offer 24/7 emergency service? Say so, prominently. That's a major differentiator and it's the reason someone picks you over the company that's "open Monday through Friday 8-5."

**Reviews or testimonials.** Even 2-3 short quotes from real customers make a difference. "Called at 10pm, they were here by 11. Fixed our furnace the same night." That kind of testimonial does more selling than any copy you could write.

## What you don't need

**A blog.** Unless you're going to consistently write and post (which you're not, because you're [running an HVAC business](/websites-for-contractors/)), an empty blog section with one post from 2022 looks worse than no blog at all.

**An "About Us" page with your company history.** Nobody looking for emergency HVAC repair cares that you founded the company in 2008 because of your passion for heating and cooling. Save the story for in-person conversations.

**Animations, sliders, or video backgrounds.** These slow your site down. On mobile, slow sites lose customers. A homeowner searching on their phone with a broken furnace will not wait 4 seconds for your hero video to load.

**A complex service menu with 15 subcategories.** Keep it simple: repair, installation, maintenance. Maybe add "commercial" if you do commercial work. That's enough for a website. You can explain the details on the phone.

## The mobile factor

Over 70% of local searches happen on phones. Your website has to work perfectly on mobile. That means:

Text is readable without zooming. Buttons are big enough to tap with a thumb. Your phone number is a clickable link. The page loads in under 3 seconds. Nothing breaks or overlaps on a small screen.

Pull out your phone right now and load your own website. If anything is hard to read, slow to load, or requires pinching and zooming, you're losing calls.

## What it costs

A professional HVAC website doesn't need to be expensive. You're not building an e-commerce platform. You need a clean, fast site with your info, your services, your service area, and your phone number. That's a 3-5 page site that should cost somewhere in the [$500-$1,500 range](/#pricing) to build, with hosting running $30-$100 per month.

Compare that to the value of even one HVAC job. A furnace installation is $3,000-$8,000. A single customer you would have lost to a competitor with a better website pays for the entire site several times over.

## The bottom line

Your HVAC website has one job: make the phone ring. Everything on the page should serve that goal. Big phone number, clear services, service area listed, fast load time, works on mobile. If your current site doesn't do these things, it's costing you money every week.

The companies at the [top of Google](/seo-aeo/) in your market aren't there because they're better at HVAC work. They're there because their online presence does the basics right. The good news is that the basics aren't hard or expensive. They just need to get done.`;

const POST_4_BODY = `Landscaping is a visual business. Your work speaks for itself, but only if people can see it.

The problem is that most landscaping companies in the [Treasure Valley](/web-design-meridian/) don't have a website, or they have one that hasn't been updated since the Obama administration. Their best work is sitting in their phone's camera roll where no customer will ever see it.

Meanwhile, the landscaper down the road who put up a clean site with 10 photos of finished yards is getting the calls. Not because they do better work. Because they look like they do better work.

## The customer's decision process

Here's how most people hire a landscaper: their neighbor's yard looks great, they ask who did it, they get a name, and then they Google that name before calling.

If they find a website with photos, a service list, and a phone number, they call. If they find nothing, or they find a Facebook page with the last post from 2023, they hesitate. They might still call, but the seed of doubt is planted. "Are these guys still in business?"

Now imagine the same person didn't get a referral. They just searched "landscaper near me" or "lawn care Meridian Idaho." Google shows them a map with 3-4 businesses. The ones with websites, reviews, and complete Google Business Profiles show up first. Everyone else is invisible.

## What a landscaping website actually needs

This isn't complicated. You don't need 20 pages or a blog or an online store. You need a few things done well:

**Photos of your work.** This is the single most important element. Before and after shots of yards you've transformed. Photos of patios, retaining walls, irrigation systems, seasonal cleanups. Real photos from your phone, not stock images. A homeowner looking at a photo of a yard that looks like their neighborhood is already imagining you doing their property.

**A clear list of services.** Mowing, edging, fertilization, aeration, leaf removal, spring/fall cleanup, hardscaping, irrigation, landscape design. List what you do so Google can match you to what people search for. If someone searches "irrigation repair Meridian" and your website doesn't mention irrigation, you won't show up.

**Your service area.** List the cities you work in. Meridian, Boise, Eagle, Star, Nampa, Caldwell. Each city name on your site is a keyword Google can match to local searches.

**A phone number you can tap.** On mobile, your phone number should be one tap to call. Not buried on a contact page. Visible at the top of every page.

**Seasonal relevance.** Landscaping is seasonal in Idaho. Your website should reflect what you're doing right now. Spring cleanups in March, weekly mowing in summer, leaf removal in fall, snow removal in winter. A site that mentions snow removal in July looks like nobody's paying attention.

## The before and after advantage

Landscapers have something most businesses don't: dramatic visual proof of their work. A plumber can't easily show a before and after of a pipe repair. But a landscaper can show a dirt patch turned into a patio, or an overgrown yard transformed into a clean property.

These photos do more selling than any copy you could write. A gallery of 10-15 before and after shots is the most persuasive thing you can put on a landscaping website. Period.

## What it costs and why it pays for itself

A professional landscaping website costs somewhere between $500 and $1,500. That's one mid-size landscaping job. Two at most.

If your website brings in even one new client per month that you wouldn't have gotten otherwise, it pays for itself within the first month and keeps generating returns for years.

The landscapers who dominate local search in the Treasure Valley aren't doing anything complicated. They have a website with real photos, a clear service list, and a Google Business Profile with reviews. That's the whole playbook. The ones without those things are fighting over whatever's left.

---

*Aralo Studio builds websites for landscaping companies and service businesses across the [Treasure Valley](/web-design-meridian/). If your business needs a professional online presence, [get in touch](/#contact).*`;

const POST_5_BODY = `You know reviews matter. You've probably Googled a business yourself and skipped the one with 2 reviews in favor of the one with 47. Everyone does this. But actually getting your own customers to leave reviews feels awkward, pushy, or like something you never get around to.

Here's the thing: most happy customers will leave a review if you make it easy. They're not avoiding it because they don't want to help. They're avoiding it because they forget, or it takes too many steps, or they don't know where to go.

The businesses with 50+ Google reviews didn't get there by accident. They have a system. Here's how to build one.

## Step 1: Get your direct review link

Google makes this harder to find than it should be. Here's the fast way:

Search your business name on Google. Click on your Google Business Profile. Click "Ask for reviews." Google gives you a short link you can copy and share. Save this link somewhere you can grab it anytime, your phone's notes app, a bookmark, whatever.

When someone clicks this link, it opens Google Maps with the review form already loaded and the stars ready to tap. One link, one tap, done. That's the entire trick.

If you don't have a Google Business Profile yet, stop reading and go set one up first. Reviews without a profile have nowhere to live.

## Step 2: Ask at the right moment

Timing matters more than the words you use. The best time to ask for a review is immediately after you've delivered a great result and the customer is happy.

For a contractor: right after the final walkthrough when they're looking at the finished work and smiling.

For a service business: right after the job is done and they've said "looks great" or "thank you."

For a restaurant: when the customer compliments the food or the server.

Don't wait three days and send a formal email. The enthusiasm fades fast. Ask while they're still feeling good about the experience.

## Step 3: Make it stupidly easy

The number one reason people don't leave reviews is friction. Every extra step you add loses half your potential reviewers.

**Best method: text the link.** Right after the job, pull out your phone and say "Hey, would you mind leaving us a quick Google review? I'll text you the link right now so it's easy." Then text them the direct review link. They tap it, leave 5 stars and a sentence, done. Total time for them: 30 seconds.

**Second best: a QR code on your invoice or receipt.** Print a small QR code that links directly to your Google review page. Add a line: "Happy with our work? Scan this to leave a quick review." The customer can do it while they're still holding the invoice.

**Third best: email follow-up.** Send a short email within 24 hours. Keep it simple: "Thanks for choosing us. If you have 30 seconds, a Google review helps other people find us. Here's the link: [link]." No long email, no paragraphs of gratitude, just the ask and the link.

## Step 4: Don't overthink the ask

Most business owners make this way too formal or too apologetic. You don't need a speech. You need one sentence:

"Would you mind leaving us a quick Google review? It really helps."

That's it. No "if you have time" or "only if you feel comfortable" or "I know it's a lot to ask." It's not a lot to ask. You did a good job and they're happy. A 30-second review is the smallest possible favor.

## Step 5: Respond to every review

When someone leaves a review, respond to it. Every single one. Good reviews, okay reviews, even bad ones.

For a 5-star review: "Thanks [name], it was great working with you. Glad you're happy with the results."

For a 3-star review: "Thanks for the feedback [name]. We'd love to make it right, give us a call at [number]."

Google notices when businesses respond to reviews. It signals that the business is active and engaged. And it shows future customers that you actually care about the feedback, which makes them more likely to trust you.

## The numbers that matter

You don't need 500 reviews. For most local businesses in the [Treasure Valley](/web-design-meridian/), here's the reality:

0-5 reviews: You're invisible or look unestablished.
5-15 reviews: You're credible. People will consider you.
15-30 reviews: You look established. You'll outrank most local competitors.
30+: You're a local authority. Google gives you priority.

Going from 0 to 15 reviews is the highest-impact jump. That's 15 happy customers you need to ask. If you do two jobs a week and ask every customer, you're there in two months.

## What not to do

Don't buy reviews. Google catches fake reviews and will suspend your profile. Not worth the risk.

Don't offer incentives for reviews. "Leave a review and get 10% off" violates Google's policies. Just ask genuinely.

Don't review-gate. Some businesses only send the review link to customers who said they had a great experience, and send unhappy customers to a private feedback form instead. Google specifically prohibits this.

Don't panic about the occasional bad review. One 3-star review among twenty 5-star reviews actually makes your profile look more authentic. A perfect 5.0 with 50 reviews looks suspicious. A 4.8 looks real.

## Start today

Here's your homework: after your next completed job, text the customer your Google review link. That's one review. Do it again tomorrow. And the day after that.

In 30 days you'll have 10-15 new reviews and your Google ranking will be measurably different. No [SEO service](/active-seo/), no ad spend, no website changes. Just asking.

---

*Aralo Studio helps small businesses across the Treasure Valley get found on [Google through web design, SEO, and Google Business Profile optimization](/seo-aeo/). If you need help with your online presence, [get in touch](/#contact).*`;

const POST_6_BODY = `Restaurants are different from most small businesses. People don't research you for weeks before deciding. They check your website while they're already hungry, already in the car, or already arguing with their partner about where to eat. You have about 15 seconds to answer their questions or they're picking the next spot on Google.

The mistake most restaurant websites make is trying to be a magazine. Big photo carousels, elaborate animations, autoplay videos, paragraphs of chef bios. None of that matters when someone just wants to know if you're open and what's on the menu.

Here's what actually needs to be on a restaurant website, and what's wasting space.

## What every restaurant site needs

**The menu, easy to find.** This is the #1 reason people visit a restaurant website. Make it impossible to miss. Either a clean HTML menu on its own page or a PDF that opens in one tap. Don't bury it under "Dine" or "Experience." Just call it "Menu" and put it in the top nav.

**Hours and address, visible without scrolling.** Someone on their phone deciding where to go in the next 30 minutes needs to see your hours and location immediately. Top of the page, no clicks required.

**A tap-to-call phone number.** Half of restaurant traffic is mobile. If your phone number isn't a clickable link on mobile, you're losing calls.

**Reservation link if you take them.** OpenTable, Resy, Tock, whatever you use. The button should be prominent and clearly labeled. Don't make people hunt for it.

**Online ordering or delivery link.** If you offer takeout, the order link should be as obvious as the reservation link. Link directly to your ordering platform (DoorDash, Toast, your own system).

**Real photos of the food and the space.** Not stock images of generic burgers. Photos of your actual dishes from your actual kitchen. A few interior shots that show the vibe of the room. People want to know what they're walking into.

**A way to find you.** Embedded Google Map, address with a "Get Directions" link, and the neighborhood you're in.

## What to skip

**Long chef bios and origin stories.** Save these for your About page if you must have them. Nobody chose a restaurant based on your founder's grandmother's recipes.

**Massive hero videos that take 8 seconds to load.** Cool on a desktop, brutal on mobile. Half your visitors will be gone before the video starts.

**Image carousels of plates rotating every 3 seconds.** Just show one good food photo and move on.

**A blog you'll never update.** An empty blog or one with three posts from 2022 looks worse than no blog at all. Skip it unless you'll commit to posting monthly.

**Press mentions from 2018.** If you're a brand new restaurant, you don't have press yet, and that's fine. If you're established, only feature recent and relevant press.

**An email signup form for your newsletter.** Almost nobody signs up. The space is better used for something practical.

## The mobile reality

Over 80% of restaurant searches happen on phones. Your website lives or dies based on how it works on mobile. Pull out your phone right now and load your site. Then ask yourself:

Can I see your hours without scrolling? Can I tap your phone number to call? Can I find the menu in one tap? Can I make a reservation in two taps? Does the page load in under 3 seconds?

If the answer to any of these is no, your website is costing you customers every single day.

## The about page nobody reads

A lot of restaurants pour effort into their About page. Hours of writing about the family history, the inspiration, the journey. Almost nobody reads it.

What actually works for restaurants: one paragraph about the concept, where you're located, what you serve, and what makes you different. Then move on. The food and the experience tell the story better than any wall of text ever will.

## Reservations and online ordering matter more than design

A beautifully designed restaurant website that doesn't connect to OpenTable or Toast is less useful than an ugly one that does. The infrastructure matters more than the aesthetics.

Make sure your reservation system is integrated, your online ordering link goes to a working order page, and any forms (private events, catering inquiries, contact) actually deliver to an inbox you check.

## What it costs

A professional restaurant website should run somewhere between $800 and $2,000 depending on complexity. Most restaurants don't need anything more than a 5-7 page site with the menu, hours, location, reservations, online ordering, and contact info. Anything more is usually overengineering.

Compare that to the value of even one booked table per week that you would have lost to a competitor with a better website. The site pays for itself in the first month.

## The bottom line

Your restaurant website has two jobs: tell people what you serve and make it easy for them to decide to come. Everything on the page should serve one of those two goals. If something doesn't, cut it.

The best restaurant websites aren't the prettiest. They're the ones that answer every question a potential customer might have before they think to ask it.

---

*Aralo Studio builds websites for restaurants and small businesses across the [Treasure Valley](/web-design-meridian/). If your restaurant needs a professional online presence, [get in touch](/#contact).*`;

const POST_7_BODY = `Something changed in the last two years that most small business owners haven't caught up to yet. People aren't just Googling anymore. They're asking ChatGPT, Gemini, Claude, and Perplexity. They're using voice assistants. They're getting answers without ever clicking a website.

This shift has a name: Answer Engine Optimization, or AEO. It's not replacing SEO. It's running alongside it. And if you're a small business owner in the Treasure Valley, ignoring it now means losing customers to competitors who figured it out first.

## What's the actual difference

**SEO (Search Engine Optimization)** is about getting your website to show up when someone types a search into Google. The goal is a click. You optimize your site so Google ranks you high enough that people see you and click through.

**AEO (Answer Engine Optimization)** is about getting your business mentioned when someone asks an AI tool a question. The goal isn't always a click. It's being the answer. When someone asks ChatGPT "what's a good plumber in Meridian, Idaho," AEO is what determines whether you get named or your competitor does.

The two overlap, but they're not the same. A site optimized for SEO might rank #1 on Google but never get mentioned by Gemini. A site optimized for AEO might get cited by ChatGPT but rank lower on Google. The businesses winning in 2026 are doing both.

## Why this matters now

Search behavior is changing fast. ChatGPT has hundreds of millions of weekly users. Google added AI Overviews to search results, which means many searches now end without anyone clicking a link. People ask their phone, get an answer, and move on.

For a local business, this is both a threat and an opportunity. The threat: if AI tools don't know about you, you're invisible to a growing share of potential customers. The opportunity: most of your competitors aren't doing anything about this yet. The bar to stand out is low.

## What AI tools actually look at

When an AI model decides which businesses to recommend, it doesn't have a magic algorithm. It pulls from sources it trusts. Here's what it looks for:

**A Google Business Profile.** This is the foundation. AI tools heavily reference Google's own data. No GBP means you don't exist in most AI responses about local businesses.

**Consistent citations across the web.** Your business name, address, and phone number need to match exactly on Yelp, Bing Places, Apple Maps, BBB, Facebook, and other directories. AI tools cross-reference these to confirm you're real.

**Reviews.** AI models use reviews as social proof signals. A business with 30 Google reviews is far more likely to be mentioned than one with 2.

**Clear, structured information on your website.** Pages that directly answer common questions ("what services do you offer," "what's your service area," "how much do you charge") give AI tools something to pull from. Buried information doesn't help.

**Structured data (schema markup).** This is code that tells search engines and AI tools what your page is about. Adding LocalBusiness schema, FAQ schema, and Service schema makes your content machine-readable.

**Mentions on other websites.** When other sites link to or mention your business by name, AI tools take notice. Even small mentions in local directories, partner sites, or news articles build credibility.

## What this looks like in practice

Let's say someone asks ChatGPT: "Can you recommend an affordable web designer in Meridian, Idaho who works with small businesses?"

For ChatGPT to mention you, it needs to know:
- You exist (GBP, citations, web presence)
- You're in Meridian (consistent location data)
- You work with small businesses (clear messaging on your site)
- You're affordable (pricing visible, or mentions of starting at $495)
- You're a web designer (clear service category)

If your website buries half of this information or it's inconsistent across platforms, the AI moves on to the next business that's easier to summarize.

## The new on-page SEO checklist

If you want to show up in AI responses, your website needs to be set up to answer questions directly. Here's what to do:

**Write content that answers questions.** Instead of clever marketing copy, use direct statements. "We serve customers in Meridian, Boise, Eagle, and the surrounding Treasure Valley" is better than "Operating throughout the gem state."

**Use FAQ sections.** A list of common questions and direct answers gives AI tools easy content to reference. Add an FAQ to your service pages.

**Add LocalBusiness schema.** This tells search engines exactly what your business is, where you're located, what hours you're open, and what services you offer. It's invisible to visitors but critical for AI tools.

**Be specific about location and services.** "We're a web design studio in Meridian, Idaho serving the Treasure Valley" is better than "We help businesses go online." Specificity wins.

**Show your pricing or pricing range.** AI tools often filter recommendations by budget. If your pricing is anywhere on your site, you become a candidate for budget-based queries.

## What's not changing

SEO isn't dead. People still use Google. Local search is still huge. Getting reviews, building citations, and optimizing your Google Business Profile still matters as much as ever.

What's changing is that all of those things now serve double duty. They feed both traditional search and AI search. The work you do for one usually benefits the other.

## The bottom line

You don't need to learn a new discipline. You need to understand that the rules for visibility online have expanded. Google search isn't the only place customers find businesses anymore.

The fastest path to AEO visibility for a small business: a verified [Google Business Profile](/seo-aeo/), consistent citations across major directories, a clean website with clear answers to common questions, and 15+ Google reviews. Do those four things and you'll show up in both Google and AI search results, while most of your competitors are still optimizing for keywords from 2018.

---

*Aralo Studio helps small businesses across the Treasure Valley get found in both traditional search and AI tools through [web design, SEO, and AEO services](/seo-aeo/). If you need help with your online presence, [get in touch](/#contact).*`;

const POST_8_BODY = `If you've ever looked into getting a website for your business, you've run into the same question: should you just build it yourself on Wix or Squarespace, or pay someone to do it?

Most articles on this topic are written by people trying to sell you one or the other. This isn't that. Here's the honest version, written by someone who builds websites for a living but will tell you when DIY actually makes more sense.

## When DIY actually works

DIY website builders are great for some situations. If you fit any of these, you probably don't need to hire anyone:

**You're testing an idea that might not stick.** If you're not sure whether your side business will become real, don't spend $500-1,500 on a site for it. Build something cheap and ugly on Wix. If the business takes off, replace it later with something professional.

**You have time and you enjoy fiddling with this stuff.** If you actually like learning new tools, picking templates, and tweaking layouts, you'll probably be fine on Squarespace. The tools have gotten much better in the last few years.

**You only need a one-page site with basic info.** If all you need is your name, what you do, your phone number, and a contact form, you can build that on Squarespace in a weekend. It won't be amazing, but it'll work.

**Your budget genuinely doesn't allow for hiring.** If you're scraping together every dollar to launch your business, $20/month for Squarespace is better than no website at all.

## When DIY breaks down

The pitch from DIY builders is always the same: "Build a beautiful website in minutes!" The reality is messier. Here's where most DIY projects fall apart:

**Time. So much time.** The marketing says "minutes." The reality is 20-40 hours for someone who's never done it before. Picking a template takes longer than you think. Writing copy is harder than you think. Figuring out why the mobile view looks different from the desktop view is harder than you think. Your time is worth something. If you make $50/hour in your business, spending 30 hours on a website is a $1,500 project. The math stops favoring DIY pretty quick.

**It looks like a template.** People can tell when a site was built from a Squarespace template. Same hero layouts, same fonts, same generic stock photos. It's not bad, but it doesn't stand out either. For some businesses that's fine. For others (especially anything where trust or premium positioning matters) it actively works against you.

**SEO is harder than it looks.** Modern builders all claim to be "SEO-friendly." That doesn't mean your site will rank. Showing up on Google requires actual SEO work: proper page structure, keyword research, location signals, schema markup, fast load times, internal linking. The builder makes it possible. It doesn't do it for you.

**You're stuck maintaining it forever.** Templates change. Plugins update. Domain settings need adjusting. Content needs refreshing. Six months from now when something breaks, you're back in the builder trying to remember how everything works. That recurring time cost rarely gets counted up front.

**You can't easily move it.** Squarespace and Wix are walled gardens. If you outgrow them, exporting your site to a different platform is painful at best. You're locked in.

## When hiring someone makes sense

Hiring out the work makes sense when:

**Time matters more than money.** If you're already busy running your business, the 30 hours you'd spend learning a website builder is 30 hours not spent on actual revenue-generating work.

**Trust and credibility matter to your customers.** Industries where people Google you before calling (counselors, contractors, mortgage brokers, lawyers, anyone selling a high-trust service) need a site that looks more professional than a template.

**You want SEO that actually works.** A web designer who understands local SEO will set up your site to actually rank. A DIY site might never make it past page 5 of Google.

**You're not interested in learning the technical stuff.** Domain registrars, hosting, DNS, plugins, updates. If reading those words makes you tired, hire someone.

## The pricing breakdown

Here's the honest cost comparison:

**DIY (Squarespace, Wix):**
- $15-30/month subscription
- $15-50/year for a domain
- 20-40 hours of your time to build it
- Ongoing time to update and maintain
- Total first-year cost: $200-400 plus 30+ hours of your time

**Freelancer (a real one, not Fiverr):**
- $500-1,500 to build
- $20-50/month for hosting (if separate)
- Their time to make changes (usually hourly after launch)
- Total first-year cost: $750-2,100

**Small studio (like us):**
- $495-1,295 to build
- $29-99/month bundled hosting and maintenance
- Edits included in monthly plan
- Total first-year cost: $843-2,483

**Agency:**
- $5,000-15,000 to build
- $100-500/month for ongoing services
- Detailed contracts, multiple meetings
- Total first-year cost: $6,200-21,000

For most small businesses in the Treasure Valley, the small studio range hits the sweet spot. Professional work without agency overhead, and someone who actually answers when you need a change made.

## The middle option nobody talks about

There's a third option most people miss: build it yourself on a DIY platform, then pay someone for a few hours to polish it.

If you're handy with technology, you can absolutely set up the basic Squarespace site, write your copy, and add your photos. Then hire a designer for 2-3 hours to fix the things that look off, optimize it for SEO, and set up your Google Business Profile properly. Total cost: maybe $300-500 plus the monthly subscription. You get most of the benefit of hiring help at a fraction of the cost.

This works best for businesses with simple needs and someone who's comfortable enough with technology to do the basics.

## How to decide

Ask yourself three questions:

1. How much is your time worth per hour? Multiply by 30 (the hours DIY will actually take). If that number is bigger than hiring someone, hire someone.

2. Do your customers Google you before calling? If yes, the professional polish matters and DIY probably isn't enough.

3. Do you actually enjoy this kind of work? If yes, DIY can be rewarding. If no, hiring saves you a lot of frustration.

There's no universal right answer. There's only the right answer for your specific business, budget, and patience level.

## The bottom line

DIY website builders aren't bad. They're just not always the cheapest option once you count your time. And they're rarely the best option if professional credibility matters to your customers.

If you've already tried building your own site and abandoned it halfway through (or finished it and quietly hate how it looks), that's your answer. [Get help](/#contact). The opportunity cost of a bad website is higher than the cost of paying someone to build a good one.

---

*Aralo Studio builds professional websites for small businesses across the Treasure Valley starting at $495. If you're tired of fighting your DIY site, [get in touch](/#contact).*`;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "does-your-boise-business-need-a-website",
    title: "Does Your Boise Business Need a Website?",
    date: "2026-05-02",
    category: "Local Business",
    headerImage: "/blog/blog-photo-01-storefront.jpg",
    headerImageAlt: "Open sign hanging in a small business storefront window",
    body: POST_1_BODY,
  },
  {
    slug: "why-competitors-show-up-on-google",
    title: "Why Your Competitors Outrank You on Google",
    date: "2026-05-02",
    category: "Local SEO",
    headerImage: "/blog/blog-photo-02-google.jpg",
    headerImageAlt: "Google search homepage displayed on a tablet screen",
    body: POST_2_BODY,
  },
  {
    slug: "hvac-website-convert-calls",
    title: "What HVAC Websites Need to Convert Calls",
    date: "2026-05-02",
    category: "Industry Guide",
    headerImage: "/blog/blog-photo-03-hvac.jpg",
    headerImageAlt: "HVAC technician servicing an outdoor air conditioning unit",
    body: POST_3_BODY,
  },
  {
    slug: "landscaper-website",
    title: "Why Landscapers Lose Jobs to Competitors With Better Websites",
    date: "2026-05-19",
    category: "Industry Guide",
    headerImage: "/blog/blog-photo-04-landscaping.jpg",
    headerImageAlt: "Lawn mower cutting grass on a residential property",
    body: POST_4_BODY,
  },
  {
    slug: "how-to-get-google-reviews",
    title: "How to Get More Google Reviews Without Being Annoying About It",
    date: "2026-05-19",
    category: "Local SEO",
    headerImage: "/blog/blog-photo-05-reviews.jpg",
    headerImageAlt: "Business owner shaking hands with a satisfied client",
    body: POST_5_BODY,
  },
  {
    slug: "restaurant-website-essentials",
    title: "What Every Restaurant Website Actually Needs (and What to Skip)",
    date: "2026-06-24",
    category: "Industry Guide",
    headerImage: "/blog/blog-photo-06-restaurant.jpg",
    headerImageAlt:
      "Inside of a warm, inviting restaurant with set tables and natural lighting",
    body: POST_6_BODY,
  },
  {
    slug: "seo-vs-aeo-small-business",
    title: "SEO vs AEO: What Small Businesses Need to Know in 2026",
    date: "2026-06-24",
    category: "Local SEO",
    headerImage: "/blog/blog-photo-07-aeo.jpg",
    headerImageAlt: "Woman sitting on a bed using a laptop to search online",
    body: POST_7_BODY,
  },
  {
    slug: "diy-vs-hiring-web-designer",
    title: "DIY Website Builders vs Hiring Someone: An Honest Comparison",
    date: "2026-06-24",
    category: "Comparison",
    headerImage: "/blog/blog-photo-08-diy.jpg",
    headerImageAlt:
      "A clean website displayed on a desktop monitor in a workspace",
    body: POST_8_BODY,
  },
];

/** Sorted newest-first by date. */
export const POSTS_BY_DATE: BlogPost[] = [...BLOG_POSTS].sort((a, b) =>
  b.date.localeCompare(a.date)
);

/** Find a post by slug. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

/** Strip a small amount of markdown to produce a plain-text snippet. */
function stripMarkdown(md: string): string {
  return md
    .replace(/^#{1,6}\s+.*$/gm, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/\[(.+?)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^>\s*/gm, "")
    .replace(/\n{2,}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** ~150-char excerpt, derived from body unless explicitly provided. */
export function getExcerpt(post: BlogPost, max = 150): string {
  if (post.excerpt) return post.excerpt;
  const plain = stripMarkdown(post.body);
  if (plain.length <= max) return plain;
  const cut = plain.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + "…";
}

/** Display date, e.g. "May 2, 2026". */
export function formatPostDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
