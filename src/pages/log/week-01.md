---
layout: ../../layouts/LogEntry.astro
title: "Building the site"
description: "Setting up the site I'll use to document the next 20 weeks."
date: "2026-09-08"
---

Setting up the site I'll use to document the next 20 weeks.

## What I did

I had Claude interview me so it could understand what I was trying to do, then it built a site template from that.
After I got the template I wrote every word of the copy myself. That was a rule I set up front — AI-written personal copy reads like AI-written personal copy.

## What broke

The JavaScript kept breaking because I used apostrophes inside single-quoted strings, which closed the string early and made the build fail. 
It was a simple fix: I changed the single quotes to double quotes.

## Next

I'll be wiring the site up to Cloudflare Pages, then deliberately breaking the build to see what happens when a deploy fails and how to recover from it.
