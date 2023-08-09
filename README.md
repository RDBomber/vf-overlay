# vf-overlay
As for the current status on this, These are just snippets for now.
Roadblocks/Issues/Problems are listed on the Issues section, and I would appreciate your help (I would like to gain more experience or feel like I know what I'm doing)

* discord: rdbomber
* twitter: @RDBomber_

Basically, this was me being tired of editing a text file for my stream to set my overlay.
It's fine, but it would be nice to automate it considering the problems with that solution are:
* If you forget to edit it before starting your game, you'll have to alt-tab out of your game (and there are reasons why you might not want to)
* Even then, that number can change depending on what scores you get during your session, therefore requiring to alt-tab.
* Of course, you'll have to edit manually. It doesn't take much time, but in a stream setting, you are probably setting up other things, and if you haven't updated beforehand, it could be a bit annoying.

There were two options I could choose from, I could make a OBS script that would probably change a specified text source or a browser overlay.
Personally, I think a browser overlay would be a better option. Sure it might not make sense to have a full blown web-app or web overlay just to retrieve a number, but I think it could be more flexible.

It would probably be a easier project to actually do as my first project that would relate to my hobbies.

I could add potential styling or custom styling depending on the Volforce value, maybe like a subtle glow behind it matching the Volforce Class color.
And with the way I'm retrieving that data, it doesn't just have to be pulling Volforce. It could pull the user's Class/Dan, or maybe show how much you gained in the ongoing session.

As how I would be retrieving that data, I would be using the Tachi API. (Could be used for either)
Sure, it means I would have to rely on another service instead of pulling from the game, but honestly, I don't think I would be able to do that at all yet. (Not to mention I'm not sure where I would start.)

As for why not use a webhook for this? The main reason is I don't know how to LMAO
The other reason is well, Tachi's documentation doesn't seem to show anything for that purpose. The closest thing would be the set property which is for Volforce Classes or Dans too, but it doesn't seem to be the actual Volforce value.
> Please let me know if I'm wrong, because I wouldn't be able to try it.
> As I said, I don't know how I would use it, but from my understanding, it sends or does a POST request to you.


