export const regFormHtml = /* html */ `
  <form action="javascript:" id="reg-form">
    <h2>Register</h2>

    <table>
      <tr>
        <td>
          <label for="reg-username-input">Username</label>
        </td>
        <td>
          <input id="reg-username-input" name="username" placeholder="Preferred username" required>
        </td>
      </tr>

      <tr>
        <td>
          <label for="reg-password1-input">Password</label>
        </td>
        <td>
          <input id="reg-password1-input" name="password1" type="password" placeholder="Preferred password" required>
        </td>
      </tr>
      
      <tr>
        <td>
          <label for="reg-password2-input">Confirm Password</label>
        </td>
        <td>
          <input id="reg-password2-input" name="password2" type="password" placeholder="Same password" required>
        </td>
      </tr>
    </table>

    <p class="inform-output">Try registering if not have an account.</p>

    <div class="buttons">
      <button type="submit">Register</button>
      <button type="button">Cancel</button>
    </div>
  </form>
`
