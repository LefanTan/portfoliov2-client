# Portfolio V2

### PS: IN PROGRESS

**Second version of my portfolio website!**

Well, I really didn't like the first iteration of my website, I think it's super weird and clunky and non-responsive, so here's a second version of it 😎

In terms of design, I tried for the _60's 70's retro vibe_. I recently saw a packaging of a harmonica that's in retro and thought

> Wowowow wouldn't that be cool as my websites' theme

So I gave my best to design it, with wireframes and figma as prototyping and all. And the end result I think its.... interesting, so definitely check it out!

PS: You can click on the TV's buttons

## Things I wanted to achieve

1. Clean html/css code? (let me know if it isn't)
2. Integrates an [API](https://github.com/LefanTan/portfoliov2-server) that I made to query my portfolio data
3. Responsiveness
4. Accessbility

## Key take aways

1. For CSS, I tried using less classNames and used mainly selectors instead, turns out this isn't very sustainable as CSS will be messed up when you make changes to your HTML etc.
2. I learned some interesting loading screen technique.
   - Have a Loading div sibling to #root that you can toggle whenever you need to display loading screen
   - use window.onload + document.fonts.ready callback
