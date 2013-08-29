---
layout: post
title:  "Building a Lightweight Blog with Jekyll & Pure"
date:   August 27th, 2013
categories: code design
---

This past Saturday, I woke up with an itch in the back of my brain. Anybody who enjoys building things knows this itch, this nagging feeling that you should be using your hands and your brain to make something. Anything.

So, as I sipped my morningcoffee and puffed my morning cigarette, I looked into making a blog. There's infinite options for how to go about it, but the first step in figuring out what to do in any project is figuring out what you're not doing.

Tumblr, wordpress, blogger, any prebuilt solutions were immediately out. I wanted to build something, not just skin it. So what would be best for building my blog? Now I needed some goals and criteria.

It needed to be easy and quick to build. I wanted to have the blog working by the end of the weekend, and I was already halfway through Saturday morning. 

I looked at Rails, Django, Flask, and Node, and while [Poet](http://jsantell.github.io/poet/ "Poet is a blog generator in node.js to generate routing, render markdown/jade/whatever posts, and get a blog up and running fast") looked really promising, I have very little experience deploying with these frameworks and was on a tight schedule. 

This lead me to [Jekyll](http://jekyllrb.com/ "Transform your plain text into static websites and blogs.").

Jekyll seemed like a great way to accomplish my task - get a quick, simple blog up and running in a matter of hours with ridiculously easy deployment through [Github Pages](http://jekyllrb.com/docs/github-pages/). Plus, I loved the idea of having a dynamic application built with only static files. 

So away I went! Jekyll's documentation is actually fantastic - following their [installation guide](http://jekyllrb.com/docs/quickstart/ "Jekyll Quick Start Guide") I was able to get up and running in a matter of minutes. So now I had a functioning blog.

The blog was working now, but it needed some easy styling. I decided to experiment with [Pure](http://www.purecss.io "Pure CSS by YUI"), a lightweight and responsive CSS framework. Pure is a very minimalist framework built by the excellent team at [YUI](http://yuilibrary.com/ "Yes, I know, YUI. Shush.") that boils down CSS frameworks like Bootstrap and Foundation to the absolute barest minimum of what they need to be. The grid is incredibly flexible, and using Pure is as easy as adding in <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.2.1/pure-min.css"> to your page header.

Deploying on Github Pages was also super easy. Push to Github, rename the repo to *username*.github.com and… its live! Up and running at *username*.github.io. I had no idea it would be that decievingly simple to get a blog up and running. From there, I just pointed my domain of nerdgrass.com to nerdgrass.github.io.

With a little bit of research and about a day's worth of work, [nerdgrass.com](http://www.nerdgrass.com) lives!