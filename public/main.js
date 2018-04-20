tinymce.init({
  selector:'#editor',
  height: 400,
  width:1200,
  plugins: [
    "advlist link image lists charmap print preview media",
    "table contextmenu directionality emoticons template textcolor colorpicker code spellchecker"
  ],
  menubar: 'file edit insert view format table tools',
  toolbar1: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | addName",
  setup: function(editor) {
    editor.addButton('addName', {
      text: 'Insert User Name',
      icon: false,
      onclick: function() {
        editor.windowManager.open({
          title: 'Insert User Name',
          body: [{
              type: 'textbox',
              name: 'firstName',
              label: 'First Name'
            },
            {
              type: 'textbox',
              name: 'lastName',
              label: 'Last Name'
            }
          ],
          width: 325,
          height: 100,
          onsubmit: function(e) {
            editor.insertContent('<span class="abc">'+e.data.firstName+' '+e.data.lastName+'</span>');
          },
        })
      }
    })
  }
})
