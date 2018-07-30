var app = new Vue({
  el: '#app',
  data: {
    inputMessage: '할 일을 입력해주세요!',
    buttonMessage: '등록하기',
    buttonType: 'submit',
    inputId: 'todoInput',
    todoList: []
  },
  methods: {
    todoCreate: function(e) {
      e.preventDefault();
      // console.log(this.buttonType);
      var input = document.getElementById('todoInput');
      // console.dir(input);
      this.todoList.push(
        {
          id: this.todoList.length+1,
          text: input.value
        }
      );
      input.value = '';
    },
    todoDelete: function(e) {
      e.preventDefault();
      var id = parseInt(e.path[1].id);
      for(var i = 0; i < this.todoList.length; i++) {
        if(this.todoList[i].id === id) this.todoList.splice(i+1, 1);
        this.todoList[i].id = i+1;
      }
    }
  }
})