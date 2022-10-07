const React = require('react');
const Layout = require('./Layout');

function Chat({mur}) {
  
  return (
    <Layout  mur={mur} >

{/* <section style="background-color: #eee;">
  <div class="container py-5">

    <div class="row d-flex justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-6">

        <div class="card" id="chat2">
          <div class="card-header d-flex justify-content-between align-items-center p-3">
            <h5 class="mb-0">Chat</h5>
            <button type="button" class="btn btn-primary btn-sm" data-mdb-ripple-color="dark">Let's Chat
              App</button>
          </div>
          <div class="card-body" data-mdb-perfect-scrollbar="true" style="position: relative; height: 400px">

            <div class="d-flex flex-row justify-content-start">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 1" style="width: 45px; height: 100%;"/>
              <div>
                <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">Hi</p>
                <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">How are you ...???
                </p>
                <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">What are you doing
                  tomorrow? Can we come up a bar?</p>
                <p class="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
              </div>
            </div>



          </div>
          <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
              alt="avatar 3" style="width: 40px; height: 100%;"/>
            <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1"
              placeholder="Type message"/>
            <a class="ms-1 text-muted" href="#!"><i class="fas fa-paperclip"></i></a>
            <a class="ms-3 text-muted" href="#!"><i class="fas fa-smile"></i></a>
            <a class="ms-3" href="#!"><i class="fas fa-paper-plane"></i></a>
          </div>
        </div>

      </div>
    </div>

  </div>
</section> */}

<script defer src="/js/chat.js" />

      <h2 id="users">Количество юзеров в чате: 0</h2>
      <hr />
      <form name="chatForm" className="d-flex formChat">
        <label htmlFor="exampleInput1" className="form-label">Введите сообщение</label>
        <input name="chatInp" type="text" className="form-control" id="exampleInput1" />
        <button name="chatBtn" type="submit" className="btn btn-primary" disabled>Отправить</button>
      </form>
      <hr />
      <div id="chatDiv" />

    </Layout>
  );
}

module.exports = Chat;
