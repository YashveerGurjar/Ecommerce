import '../Component/Login.css'
function Login(){
    return(
        <div class="inFormBackground">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="inLoginForm">
      <form onsubmit="return false">
        <div class="title">
          <h3>Login Here</h3>
        </div>
        <div class="inputGroup">
          <label for="email">Email</label>
          <input type="email" placeholder="Enter Email" id="email" />
        </div>
        <div class="inputGroup">
          <label for="password">Password</label>
          <input type="email" placeholder="Enter Password" id="password" />
        </div>
        <button class="submitForm">Log In</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i></div>
          <div class="fb"><i class="fab fa-facebook"></i></div>
          <div class="tw"><i class="fab fa-twitter"></i></div>
        </div>
      </form>
    </div>
  </div>
    )
}

export default Login;
