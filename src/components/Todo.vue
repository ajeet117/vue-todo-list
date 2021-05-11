<template>
  <div class="hello">
   <c-input placeholder="Enter what you want to do" v-model="todo" @keyup.enter="addItem"/>
   <c-button variant-color="blue" size="sm" class="btn" @click="addItem" v-if="!isEditing">
    Add
  </c-button>
  <c-button variant-color="blue" size="sm" class="btn" @click="updateItem" v-else>
    Update
  </c-button>

  <c-list as="ol" style-type="decimal">
  <c-list-item v-for="(todo,index) in todos" :key="index" my="2">
    {{todo}}
    <c-button variant-color="blue" size="sm" mx="2" @click="editItem(index,todo)">
    Edit
  </c-button>
  <c-button variant-color="red" size="sm" mx="2" @click="deleteItem(index)">
    Delete
  </c-button>
  </c-list-item>
</c-list>
  </div>
</template>

<script>
import { CInput,CButton,CList,CListItem } from "@chakra-ui/vue";
export default {
  name: 'Todo',
  components:{
   CInput,
   CButton,
   CList,
   CListItem
  },
  data()
  {
    return {
      todo:"",
      selectedIndex:null,
      isEditing:false,
      todos:["Wake up early"]
    }
  },
  methods:{
    addItem()
    {
      this.todos.push(this.todo)
      this.todo=""
    },
    editItem(i,item)
    {
      this.todo=item;
      this.isEditing=!this.isEditing;
      this.selectedIndex=i;
    },
    updateItem()
    {
      this.todos.splice(this.selectedIndex,1,this.todo)
      this.todo=""
    },
    deleteItem(i)
    {
      this.selectedIndex=i;
      this.todos.splice(this.selectedIndex,1);
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello
{
  width: 75%;
  margin: 0 auto;
}
.btn
{
  display: flex !important;
  justify-content: flex-start;
  margin-top: 10px;
}
</style>
