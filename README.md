# hexo-tag-mplayer

[![npm](https://img.shields.io/npm/v/hexo-tag-mplayer.svg)](https://www.npmjs.com/package/hexo-tag-mplayer)
[![Travis](https://img.shields.io/travis/wshunli/hexo-tag-mplayer.svg)](https://travis-ci.org/wshunli/hexo-tag-mplayer)
[![GitHub license](https://img.shields.io/github/license/wshunli/hexo-tag-mplayer.svg)](https://github.com/wshunli/hexo-tag-mplayer)
[![David](https://img.shields.io/david/wshunli/hexo-tag-mplayer.svg)](https://github.com/wshunli/hexo-tag-mplayer)
[![David](https://img.shields.io/david/dev/wshunli/hexo-tag-mplayer.svg)](https://github.com/wshunli/hexo-tag-mplayer)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwshunli%2Fhexo-tag-mplayer.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwshunli%2Fhexo-tag-mplayer?ref=badge_shield)


Insert [cPlayer](https://github.com/MoePlayer/cPlayer) in Hexo by using tags.

## Install

``` bash
$ npm install hexo-tag-mplayer --save
```

## Quick Start

``` JavaScript
{% mplayer %}
    playlist: [
        {
            name: 'Song name...',
            artist: 'Singer name...',
            src: 'Song resource link...',
            poster: 'Song Cover link...',
            lyric: 'Lyrics...',
            Sublyric: 'Deputy lyrics, generally for translation...'
        },
        {
            ...
        },
        ...
    ],
    autoplay: true,
    volume: 0.75,
    playmode: "listloop",
    big: true,
    dark: false
{% endmplayer %}
```

For more details, visit [hexo-tag-mplayer Demo](http://www.wshunli.com/hexo-tag-mplayer.html) here.

# Option

|OPTION|default content|description|
|:-----|:-------------:|:----------|
|playlist|`[]`|Playlist.|
|autoplay|`false`|Autoplay (mobile is not available).|
|volume|`1`|Default volume.|
|playmode|`listloop`|Default play mode. |
|big|`false`|Default player size. |
|dark|`false`|Default player theme. |

For more details, visit [CPlayer Demo](https://cplayer.js.org/) here.

# Thanks

Thanks for [cPlayer](https://github.com/MoePlayer/cPlayer) & Inspired by [hexo-tag-cplayer](https://github.com/EYHN/hexo-tag-cplayer) .

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwshunli%2Fhexo-tag-mplayer.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwshunli%2Fhexo-tag-mplayer?ref=badge_large)