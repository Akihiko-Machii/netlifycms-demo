import React from "react"
import logo from "../images/logo.svg"
import headerIcon from "../images/blank.png";
import searchIcon from "../images/search.png";

const Header = () => (
  <header class="header">
    <div id="HTMLBlock124070" class="HTMLBlock">
      <div class="header-inner">
        <h1 class="header-logo" id="anc-logo">
          <br/>
          <a href="/"><img src={logo} alt="ファイル転送、データ連携ならHULFT" /></a>
        </h1>
        <div class="header-menu toggle-menu js-toggle-menu">
          <div class="header-menu-btn toggle-menu-hook">
            <button type="button">
              <span class="header-menu-btn-inner">Menu</span>
              <span class="header-menu-btn-state toggle-menu-state">開く</span>
            </button>
          </div>
          <div class="header-menu-content toggle-menu-content">
            <div class="header-utility">
              <div class="header-utility-inner">
                <div class="header-search">
                  <form style={{ margin: '0px' }} action="/search/">
                    <p class="header-search-inner"><input name="q" title="サイト内検索" type="text" /> <button type="submit"><img src={searchIcon} alt="検索" /></button></p>
                  </form>
                </div>
                <div class="header-region toggle js-pulldown" style={{ minWidth: '138px' }}>
                  <div class="header-region-btn toggle-hook">
                    <button type="button" style={{ fontSize: '1.3rem' }}>日本 - JP<span class="header-region-btn-state toggle-state">Open</span>
                    </button>
                  </div>
                  <div class="header-region-content toggle-content">
                    <ul style={{ padding: '15px 10px' , fontSize: '1.3rem' }}>
                      <li><a href="http://hulftinc.com" target="_blank" hreflang="en">USA - EN</a></li>
                      <li><a href="https://www.hulft.com/uk/" target="_blank" hreflang="en">EMEA - EN</a></li>
                      <li><a href="/zh" hreflang="zh">中国 - CN</a></li>
                      <li><a href="/apac" hreflang="en">APAC / Other - EN</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <nav class="nav-global js-current-global">
              <ul>
                <li class="toggle js-dropdown">
                  <div class="nav-global-btn toggle-hook">
                    <a href="/reason">選ばれる理由</a>
                  </div>
                </li>
                <li class="toggle js-dropdown">
                  <div class="nav-global-btn toggle-hook">
                    <a href="/casestudies">事例</a>
                  </div>
                </li>
                <li class="toggle js-dropdown">
                  <div class="nav-global-btn toggle-hook">
                    <a href="/seminar">セミナー</a>
                  </div>
                </li>
                <li class="toggle js-dropdown">
                  <div class="nav-global-btn toggle-hook">
                    <a href="/download">ダウンロード</a>
                  </div>
                </li>
                <li class="toggle js-dropdown">
                  <div class="nav-global-btn toggle-hook">
                    <a href="/special-column">コラム</a>
                  </div>
                </li>
                <li class="toggle js-dropdown">
                  <div class="nav-global-btn toggle-hook">
                    <a href="/support/">サポート</a>
                  </div>
                </li>
                <li class="toggle js-dropdown">
                  <div class="nav-global-btn toggle-hook">
                    <a href="/partner">パートナー</a>
                  </div>
                </li>
              </ul>
            </nav>
            <ul class="header-link-list js-align-height-03" data-align-target="a">
              <li class="_myhulft"><a href="https://his.hulft.com/mypage/login/login" target="_blank" style={{ height: '14px' }}>myHULFT <img src={headerIcon} alt="新規ウィンドウで開く" class="icon-blank" /></a></li>
              <li><a href="/tech-support" target="_blank">技術サポート専用サイト <img src={headerIcon} alt="新規ウィンドウで開く" class="icon-blank" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
