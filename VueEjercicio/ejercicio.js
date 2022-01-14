new Vue({
    el:"#ejercicio1",
    data:{
        lista:[],
        contenido:""
    },
    methods:{
        escribirInput: function(){
            return this.contenido;
        },
        escribirEnLista: function(){
            this.lista.push(this.contenido);
            this.contenido = "";
        }
    }


    


})