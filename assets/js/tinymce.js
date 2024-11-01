;(function(){
	tinyMCE.PluginManager.add('shinepdf_plugin', function(editor, url){
		editor.addButton('shinepdf_button_one',{
			text: 'Shine',
			type: 'menubutton',
            menu: [
				{
					text: 'Google Drive',
					onclick:function(){
					editor.windowManager.open({
						title:"Google Drive",
						body:[
						{
							type: 'textbox',
							name: 'googlepdfid',
							label: 'id',
							value: ''
						},
						{
							type: 'textbox',
							name: 'googlepdfwidth',
							label: 'Width',
							value: '640px'
						},
						{
							type: 'textbox',
							name: 'googlepdfheight',
							label: 'Height',
							value: '480px'
						}

						],
						onsubmit:function(e){
							editor.insertContent(
								'[shinepdf id="' + e.data.googlepdfid +'" width="' + e.data.googlepdfwidth + '" height="' + e.data.googlepdfheight +'"]' + editor.selection .getContent() + '[/shinepdf]'

	                        );
						}
					});
					}
				},
				{
					text: 'Youtube',
					onclick:function(){
					editor.windowManager.open({
						title:"Youtube",
						body:[
						{
							type: 'textbox',
							name: 'youtubeid',
							label: 'id',
							value: ''
						},
						{
							type: 'textbox',
							name: 'youtubewidth',
							label: 'Width',
							value: '640px'
						},
						{
							type: 'textbox',
							name: 'youtubeheight',
							label: 'Height',
							value: '480px'
						}

						],
						onsubmit:function(e){
							editor.insertContent(
								'[shineyoutube id="' + e.data.youtubeid +'" width="' + e.data.youtubewidth + '" height="' + e.data.youtubeheight +'"]' + editor.selection .getContent() + '[/shineyoutube]'

	                        );
						}
					});
					}
				},
				{
					text: 'Vimeo',
					onclick:function(){
					editor.windowManager.open({
						title:"Vimeo",
						body:[
						{
							type: 'textbox',
							name: 'vimeoid',
							label: 'id',
							value: ''
						},
						{
							type: 'textbox',
							name: 'vimeowidth',
							label: 'Width',
							value: '640px'
						},
						{
							type: 'textbox',
							name: 'vimeoheight',
							label: 'Height',
							value: '480px'
						}

						],
						onsubmit:function(e){
							editor.insertContent(
								'[shinevimeo id="' + e.data.vimeoid +'" width="' + e.data.vimeowidth + '" height="' + e.data.vimeoheight +'"]' + editor.selection .getContent() + '[/shinevimeo]'

	                        );
						}
					});
					}
				},
				{
					text: 'Dailymotion',
					onclick:function(){
					editor.windowManager.open({
						title:"Dailymotion",
						body:[
						{
							type: 'textbox',
							name: 'dailymotionid',
							label: 'id',
							value: ''
						},
						{
							type: 'textbox',
							name: 'dailymotionwidth',
							label: 'Width',
							value: '640px'
						},
						{
							type: 'textbox',
							name: 'dailymotionheight',
							label: 'Height',
							value: '480px'
						},
						{
                            type: 'checkbox',
                            name: 'dailymotioncheckbox',
                            label: 'autoplay',
                            text: 'Yes',
                            checked : 'autoPlay=1'
                        },

						],
						onsubmit:function(e){
							editor.insertContent(
								'[shinedailymotion id="' + e.data.dailymotionid +'" Autoplay="' + e.data.dailymotioncheckbox +'" width="' + e.data.dailymotionwidth + '" height="' + e.data.dailymotionheight +'"]' + editor.selection .getContent() + '[/shinedailymotion]'

	                        );
						}
					});
					}
				},
				{
					text: 'Imgur',
					onclick:function(){
					editor.windowManager.open({
						title:"Imgur",
						body:[
						{
							type: 'textbox',
							name: 'imgurid',
							label: 'id',
							value: ''
						},
						{
							type: 'textbox',
							name: 'imgurwidth',
							label: 'Width',
							value: '640px'
						},
						{
							type: 'textbox',
							name: 'imgurheight',
							label: 'Height',
							value: '480px'
						}

						],
						onsubmit:function(e){
							editor.insertContent(
								'[shineimgur id="' + e.data.imgurid +'" width="' + e.data.imgurwidth + '" height="' + e.data.imgurheight +'"]' + editor.selection .getContent() + '[/shineimgur]'

	                        );
						}
					});
					}
				},
				]
			});
		});
})();