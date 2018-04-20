tinymce.init({
  selector:'#editor',
  width: 1200,
  height: 400,

  menubar: 'file edit insert view format',
  toolbar1: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | newName",
  setup: function(editor) {
    editor.addButton('newName', {
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
          width: 500,
          height: 100,
          onsubmit: function(e) {
            editor.insertContent('<span class="abc">'+e.data.firstName+' '+e.data.lastName+'</span>');
          },
        })
      }
    })
  }
})
