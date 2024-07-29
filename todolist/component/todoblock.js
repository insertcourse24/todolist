class TodoBlock extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'date'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
        .list-block {
          display: flex;
          border-top: 1px solid #dedddd;
          padding: 14px 12px;
          max-width: 600px;
          height : 60px;
          box-sizing: border-box;
          justify-content: space-between;
        }
        .text-content button {
          height: 20px;
          width: 20px;
          padding: 0px;
          border: 1px solid #d2d2d2;
          border-radius: 100%;
          background-color: white;
          color:white;
          cursor: pointer;
        }

        .text-content button:hover {
          border: 1px solid #d2d2d2;
          background-color: #ececec;
        }

        .text-content{
          display: flex;
        }

        .text-content div {
          margin-left: 8px;
        }
        .text-content h6 {
          margin: 0;
          font-size: 1em;
          font-weight: 500;
        }
        .text-content p {
          font-size: 0.8em;
          margin-top: 2px;
          color: #666;
        }
        .delete {
            text-decoration: underline;
            margin: auto 0px;
            cursor: pointer;
        }
  </style>
  <div class="todo-block list-block">
    <div class="text-content">
      <button onclick='successCheck(this)'></button>
        <div>
          <h6 onclick="editTodo(this)">${this.getAttribute('title') || '타이틀'}</h6>
          <p>${this.getAttribute('date') || '날짜 000월'}</p>
        </div>
    </div>
    <p class="delete" onclick="deleteTodo(event)">삭제</p>
  </div>
    `;
  }
}

customElements.define('todo-block', TodoBlock);
