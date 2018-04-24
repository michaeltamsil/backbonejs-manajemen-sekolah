define((require, exports, module) => {
    'use strict'
    let Marionette = require('marionette'),
        Tr = require('./tr')

    module.exports = Marionette.CollectionView.extend({
        tagName: 'tbody',
        childView: Tr
    })
})
