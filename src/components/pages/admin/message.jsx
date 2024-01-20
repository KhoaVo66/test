import React from 'react';

const Message = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="wishlist-nav">
          <div className="contact-title">
            <div className="contact-fix">
              <a href="/admin">Home</a>
              &nbsp;/&nbsp;
              <p>Message</p>
            </div>
          </div>
          <div className="cart-wrap">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cart-text">1</td>
                  <td className="cart-text">Nguyen Tuan Anh</td>
                  <td className="cart-text">anh123@gmail.com</td>
                  <td className="cart-text">0123456789</td>
                  <td className="cart-text">Web lua dao a</td>
                </tr>
                <tr>
                  <td className="cart-text">2</td>
                  <td className="cart-text">Nguyen Huu Hiep</td>
                  <td className="cart-text">soicodoc@gmail.com</td>
                  <td className="cart-text">0123456789</td>
                  <td className="cart-text">San pham tuyet voi toi rat thich</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;