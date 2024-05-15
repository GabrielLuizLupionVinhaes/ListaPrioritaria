class Node {
    constructor(color, priority) {
      this.color = color;
      this.priority = priority;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    inserirPrioridade(color, priority) {
      let no = new Node(color, priority);
  
      if (!this.head || this.head.priority > no.priority) {
        no.next = this.head;
        this.head = no;
      } else {
        let current = this.head;
  
        while (current.next && current.next.priority <= no.priority) {
          current = current.next;
        }
        no.next = current.next;
        current.next = no;
      }
    }
  
    mostrar() {
      let atual = this.head;
      while (atual) {
        console.log(atual.color);
        atual = atual.next;
      }
    }
  }
  
  let lista = new LinkedList();
  lista.inserirPrioridade("Vermelho", 1);
  lista.inserirPrioridade("Verde", 4);
  lista.inserirPrioridade("Azul", 3);
  lista.inserirPrioridade("Amarelo", 2);
  
  lista.display();