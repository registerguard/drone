# Drone

### [The Register-Guard](http://registerguard.com)’s 3rd party sub-theme.

![Drone](drone.jpg)

---

#### ABOUT

3rd party websites are typically unpredictable, and they’re almost always inflexible. We’ve learned over the years that its best to have a super simple template for use within these systems. Yadda yadda yadda (I’ll be back to clean up this verbiage later).

---

#### Demo

Click or scan:

DEVELOPMENT | PRODUCTION
:-: | :-:
[![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://registerguard.github.io/drone/dev/&chs=240x240)](http://registerguard.github.io/drone/dev/) | [![qr code](http://chart.apis.google.com/chart?cht=qr&chl=http://registerguard.github.io/drone/prod/&chs=240x240)](http://registerguard.github.io/drone/prod/)
`$ grunt` | `$ grunt prod`

---

#### FEATURES

* HTML4 strict (a lot of 3rd parties will frack with DTD, and I have yet to see any that use an HTML5 document type.)
* Simple CSS/HTML.
* Basic styling of core elements.
* Easy to sub-theme and extend.
* Easy to change container width.
* Namespaced.

**Important:** This theme’s sole purpose is to wrap 3rd party conent. If one needs to include additional styles, for additional “theme” styles, then one should include/organize/version those via other means.

---

#### NOTE

Using a `<table>` to wrap the `primary` content; This fixes any potentially bad HTML generated by 3rd party:

```html
<table>
	<tr>
		<td>
			<!-- 3rd party content here. -->
		</td>
	</tr>
</table>
```

---

#### LEGAL

Copyright © 2013-2014 [Micky Hulse](http://hulse.me)/[The Register-Guard](http://www.registerguard.com)
