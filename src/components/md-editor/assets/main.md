## What's this ?
An enjoyable markdown editor with inline image uploader . Like Github.com ~

**:Status Developing & Don't use in production !**

## How to use ?

This demonstration is bundled project . If you want to play with it , please use `vue-loader` , it's recommended . Note that the base
`SimpleMDE` lib is external , so you need refer the file globally or concat it to bundled file before beginning .

```html
<template>
  <div>
    <md-editor :body.once="initialBody" :settings="mySettings" :onChange="callback">
    </md-editor>
  </div>
</template>

<script>
import MdEditor from './md-editor';

let defaultSettings = { // please override it or follow Thanks link
  inlineUploaderSettings: { // inline attachment settings
    uploadUrl: '//upload server location',
    extraHeaders: {
      "Authorization": "",
    },
    urlText: function(filename, result) {
      return '![' + result.originalName + '](' + filename + ')';
    }
  },
  renderingConfig: {
    codeSyntaxHighlighting: true
  },
  spellChecker: false,
  status: false,
  toolbarTips: false,
  autosave: {
    enabled: false,
    uniqueId: 'hoolay-ats-{{ entityId }}'
  }
};

export default {
  data() {
    return {
      initialBody: '**hello**',
      mySettings: defaultSettings,
      callback: (editorInstance) => { /* code */ }
    }
  },
  components: {
    MdEditor
  }
}
</script>
```

## Thanks

https://github.com/NextStepWebs/simplemde-markdown-editor