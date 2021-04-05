```
Support seraph via paypal donations, thanks in advance !
```

# mysterium [![](https://img.shields.io/badge/paypal-donate-333333.svg?colorA=0070BA&colorB=333333)](https://www.paypal.me/seraphinush)
Blog repository for blog by seraphinush-gaming

Visit blog at : [https://tera-mysterium.com/](https://tera-mysterium.com)

## Discord webhook setup sample guide
Discord
- Go to 'Server Settings > Webhooks'
- Click 'Create Webhook'
- Set Webhook 'name' eg. `mysterium`
- Set Webhook 'channel' eg. `ktera-announcements`
- Copy `<Webhook URL>` for later use

IFTTT
- Log into IFTTT.com
- Go to 'My Applets'
- 'Create' If `RSS Feed` Then `Webhooks`
- Choose RSS Feed type : New Feed Item
- Set RSS Feed 'URL' as : `https://www.tera-mysterium.com/en/index.xml`
- Choose Webhooks type : Make a web request
- Set Webhook 'URL' as : `<Webhook URL>`
- Set 'Method' type as : POST
- Set 'Content' Type as : application/json
- Sample Body :
```
{
  "content": "tera-mysterium made a new post !",
  "embeds": [
    {
      "color": 3583158,
      "author": {
        "name": "{{EntryTitle}}",
        "url": "{{EntryUrl}}",
        "icon_url": "https://avatars0.githubusercontent.com/u/30970630?s=460&u=b0df69ca4e6f105c2a3b9958751343715d14df0f"
      },
      "thumbnail": {
        "url": "https://github.com/seraphinush-gaming/mysterium/blob/0f81825bb137ec915e47609af87d75f6bd11de0b/content/logo-100x100.png?raw=true"
      },
      "fields": [
        {
          "name": "Date",
          "value": "{{EntryPublished}} ",
          "inline": true
        }
      ]
    }
  ]
}
```
- Click 'Create Action' to complete
