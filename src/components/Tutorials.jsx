// Dependencies
import React, { Component } from 'react';

import $ from 'jquery';

// Mango's
import imaginemango from "../public/img/mangos/imagine-mango.svg";
import innovatemango from "../public/img/mangos/innovate-mango.svg";
import inspiremango from "../public/img/mangos/inspire-mango.svg";

// Hardware
import macbook from "../public/img/misc/macbook.svg";
import motherboard from "../public/img/misc/motherboard.png";
import submissions from "../public/img/misc/Submissions.svg";


// CSS
import pill from '../public/css/pill.css';

// Images
import vr from '../public/img/misc/vr2.png';

// Components
import Faq from './Faq';
import Footer from './Footer';
import Prospectus from './Prospectus';
import Team from './Team';
import Sponsors from './Sponsors';
import WhatLike from './WhatLike';

var mango;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    window.location = "/Prospectus";
  }

  render() {
    // Cookies Functions
    function setCookie(name, value, expires, path, domain, secure) {
      var curCookie = name + "=" + escape(value) +
          ((expires) ? "; expires=" + expires.toGMTString() : "") +
          ((path) ? "; path=" + path : "") +
          ((domain) ? "; domain=" + domain : "") +
          ((secure) ? "; secure" : "");
      document.cookie = curCookie;
    }

    function getCookie(name) {
      var dc = document.cookie;
      var prefix = name + "=";
      var begin = dc.indexOf("; " + prefix);
      if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
      } else
        begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1)
        end = dc.length;
      return unescape(dc.substring(begin + prefix.length, end));
    }

    function deleteCookie(name, path, domain) {
      if (getCookie(name)) {
        document.cookie = name + "=" +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        "; expires=Thu, 01-Jan-70 00:00:01 GMT";
      }
    }

    function fixDate(date) {
      var base = new Date(0);
      var skew = base.getTime();
      if (skew > 0)
        date.setTime(date.getTime() - skew);
    }

    // Visit Counter
    var visits = getCookie("counter");
    if (!visits) {
      visits = 1;
    } else {
      visits = parseInt(visits) + 1;
    }
    setCookie("counter", visits);

    // Jquery
    $(document).ready(function() {
      var liststyle = ['inspire','imagine','innovate'];
      var style = liststyle[(visits + 3) % 3];

      if (style == 'imagine') {
        // BG Styles
        $('.style').css('background', 'linear-gradient(to top right, #FE6BBE, #FAD865');
        $('.style').css('color', '#000');
        $('.modal-btn').css('color', '#000');
        $('.modal-btn').css('border', '1px solid #000');
        $('.modal-btn').hover(function (e) {
          $(this).css('background', e.type === 'mouseenter' ? "#000" : 'transparent');
          $(this).css('color', e.type === 'mouseenter' ? '#fff' : '#000');
        });

        // Text Style
        $('.title').text('Imagine.');
        $('.title').css('color', '#C8F020')

        // Logo Style
        $('.mango').attr('src', imaginemango)

        //  BG Picture
        $('.bg-hero').attr('src', macbook)
        $('.bg-hero').removeClass('bg-hero').addClass('macbook');

      }

      if (style == 'inspire') {
        $('.style').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('.style').css('color', '#000');
        $('.modal-btn').css('color', '#000');
        $('.modal-btn').css('border', '1px solid #000');
        $('.modal-btn').hover(function (e) {
          $(this).css('background', e.type === 'mouseenter' ? "#000" : 'transparent');
          $(this).css('color', e.type === 'mouseenter' ? '#fff' : '#000');
        });


        // Text Style
        $(".title").text('Inspire.');
        $('.title').css('color', '#23F5E9');

        // Logo Style
        $('.mango').attr('src', inspiremango);

        //  BG Picture
        $('.bg-hero').attr('src', submissions);
        $('.bg-hero').removeClass('bg-hero').addClass('submissions');
      }

      if (style == 'innovate') {
        $('.style').css('background', 'linear-gradient(233deg, #6800ff, #f52376');
        $('.style').css('color', '#fff');
        $('.modal-btn').css('color', '#fff');
        $('.modal-btn').css('border', '1px solid #fff');
        $('.modal-btn').hover(function (e) {
          $(this).css('background', e.type === 'mouseenter' ? "#fff" : 'transparent');
          $(this).css('color', e.type === 'mouseenter' ? '#000' : 'white');
        });


        // Text Style
        $('.title').text('Innovate.');
        $('.title').css('color', '#4652F7');


        // Logo Style
        $('.mango').attr('src', innovatemango);

        //  BG Picture
        $('.bg-hero').attr('src', motherboard);
        $('.bg-hero').removeClass('bg-hero').addClass('motherboard');

      }


    });

    $(document).ready(function () { $("div").hide().fadeIn(1000); });

    return (
      <div class="">
        <div className="pill-move">
          {/* <div className="pill" id="pill-1"></div>
           <div className="pill" id="pill-2"></div>
           <div className="pill" id="pill-3"></div>
           <div className="pill" id="pill-4"></div>            */}
        </div>

        <div className="pill-move top-pills">
          {/* <div className="pill" id="pill-5"></div>
           <div className="pill" id="pill-6"></div> */}
           {/* <div className="pill" id="pill-7"></div>
           <div className="pill" id="pill-8"></div>            */}
        </div>

        <div className="page">
          <div className="content">
            <div className="content">
            <img className="mango" src={imaginemango} alt="mangologo" />
            <h1 className="title"></h1>
            <img className="bg-hero" src={motherboard} alt="bg-picture" />
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="content">
            <h2>2018</h2>
            <header>MangoHacks</header>
            <p className="slogan">"I have no idea what I'm doing."</p>
            <div className="info-2">
              <p>And that's okay! We're here to help.</p>
              <p>Our organizers here at MangoHacks have created some articles and tutorials to help you!<br></br>
                Experience, background, majors, they don't matter here. Hackathons are a place where everyone should have the opportunity to learn and grow.<br></br>
                We have great mentors, and wonderful sponsors that are here to help you create amazing things.</p><br></br>
              <p>Our Marketing and Finance Manager, MJ, wrote an article for students of all majors on how
                 to get involved in hackathons and the tech community; even if you "don't know how to code." Be sure to check it out <a href="https://medium.com/mangohacks/but-i-dont-know-how-to-code-8c5c0b83ec27">here!</a></p><br></br>
              <p>How does someone pivot from Track and Field and Football to Computer Science?
                MangoHacks alumnus, Joannier, wrote an article about his journey and how he went from new developer to a full-time
                offer from a big tech company. Read it <a href="link">here!</a></p><br></br>
              <p>Cesi's</p><br></br>
              <p><i>Need more help? We have the resources! Reach out to team@mangohacks.com</i></p>
            </div>
          </div>
        </div>
      </div>
    );
    }
  }

export default Main;
