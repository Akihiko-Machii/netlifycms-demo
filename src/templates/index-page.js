import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import coloum01_01 from "../images/cloudop_coloum01_01.png";
import coloum01_02 from "../images/cloudop_coloum01_02.png";
import coloum01_03 from "../images/cloudop_coloum01_03.png";
import coloum01_04 from "../images/cloudop_coloum01_04.png";
import coloum01_05 from "../images/cloudop_coloum01_05.png";
import index_fig_05 from "../images/software-index-fig-01.png";


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div class="topic-path">
      <ul class="topic-path-inner">
        <li><a href="https://www.hulft.com/">ホーム</a></li>
        <li><a href="https://www.hulft.com/special-column">HULFT活用コラム</a></li>
        <li><b>課題解決事例 | 既存のHULFTシステムで、クラウド上にデータ活用基盤を素早く簡単に構築</b></li>
      </ul>
    </div>
    <section className="section section--gradient" style={{padding: '0px'}}>
      <div className="content">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="column is-12">
                  <BlogRoll />
                </div>
              </div>
            </div>
          </div>
        </div>

        <main class="content-primary">
          <div class="content-fluid">
            <div class="content-inner">
              <div id="HTMLBlock121578" class="HTMLBlock">
                <div class="content">
                  <main class="content-primary">
                    <div class="content-fluid js-sort-article" data-sort-file="https://www.hulft.com/data/special_column/cat_json" data-sort-tmp="/common/js/data/tmp-column.html">
                      <div class="content-inner">
                        <p class="txt-lead-case"><strong>既存のHULFTシステムで、クラウド上にデータ活用基盤を素早く簡単に構築～HULFTクラウドストレージオプションによるオンプレとクラウドの連携～</strong></p>
                        <div class="media">
                          <div class="media-item">
                            <img src={coloum01_01} style={{ width: '50%', height: '50%', textAlign: 'center'}} />
                            <span class="media-caption"></span>
                          </div>
                        </div>
                        <div class="panel">
                          <p>昨今企業におけるクラウドを利用したデータ活用が一般的になってきました。<br />クラウド上のサービスを利用したいが、データはすべてクラウド上にはなく、長年蓄積されてきたオンプレにあるデータをクラウドに連携したいというケースも多いのではないでしょうか？<br /><br />ただし、オンプレとクラウドを連携するのに、APIを利用した作り込みを行う必要があるので、なかなかすぐ実装できそうにないのは実情です。本日は、すでに社内でHULFTをご利用いただいている方に、簡単にクラウド連携できる方法をご紹介したいと思います。</p>
                        </div>
                        <h3 class="hdg-l3">HULFTのクラウドストレージオプションをご存知ですか？</h3>
                        <p>HULFTクラウドストレージオプションは、2019年12月４日にリリースした新しいバージョン（8.4.1）に付随されたオプション製品です。<br />クラウドストレージオプションを利用することで、既存のHULFTネットワークからクラウドストレージに直接ファイルを転送することを実現できます。集信側のHULFTはオンメモリでクラウドストレージへ中継します。<br />不必要にファイルを生成することがないため、安全にクラウドストレージまで転送することができます。</p>
                        <img src={coloum01_02} style={{ width: '70%', height: '70%', textAlign: 'center'}} />
                        <h3 class="hdg-l3">既存のHULFTネットワークからすぐに実装できます。</h3>
                        <p>配信側のHULFTは既存のバージョン※１のままでご利用いただけるので、既存HULFTの集配信設定をそのまま活かして、集信側のHULFTで集信先をクラウドストレージに変更すれば、クラウドストレージに繋がります。<br /><br />なお、現在最も使われている３大パブリッククラウドサービス（AWS、Azure、GCP）が提供しているクラウドストレージに対応しているので、複数のクラウドストレージを利用する場合は個々にCLIの構築や管理する必要もなく、使い慣れたHULFTの管理画面から設定だけで実現できるので、開発＆管理工数も削減できます。</p>
                        <img src={coloum01_05} style={{ width: '80%', height: '80%'}} />
                        <h3 class="hdg-l3">ユースケース</h3>
                        <p>それでは、HULFTクラウドストレージオプションの利用イメージを１つご紹介したいと思います。<br />A社は飲食サービス事業を行っている大手企業で、複数の飲食ブランドを持ち、国内外2000を超える店舗を構えています。各ブランドは各自店舗のPOSデータを連携し、分析を行っているが、データ連携の仕組みが統一されておらず、ブランド横断的なデータ分析の実現が難しいという課題がありました。</p>
                        <img src={coloum01_03} style={{ width: '70%', height: '70%'}} />
                        <br />
                        <p>ブランドの拠点にHULFTをご導入いただければ、統一されたデータ連携の仕組みによって、ブランドごとのPOSデータを簡単に収集できるようになるだけでなく、データファイルの自動転送機能によって運用管理の軽減、HULFT独自の暗号機能によって安全安心なデータ転送も実現できます。<br /><br />また、本社側のHULFTにクラウドストレージオプションを追加すれば、各事業ブランドから収集されたデータを簡単にクラウドストレージに蓄積することが可能です。場合によっては、複数のクラウドストレージを利用したいというケースもあるのではないしょうか？HULFTクラウドストレージオプションは複数のクラウドストレージであっても、集信先の設定を変更すれば簡単に連携することが可能なため、すぐに実現できます。さらに、クラウド上に蓄積されたデータは、各クラウドサービス事業社が提供しているデータ分析機能やデータ可視化する機能との連携も簡単にできます。</p>
                        <img src={coloum01_04} style={{ width: '85%', height: '85%', paddingBottom: '30px' }} />
                        <p>本日の紹介は以上となります。下記のリンクにて評価版のダウンロードも可能ですので、是非お試しください。</p>
                        <p>※1 配信側がHULFT5以前のバージョンの場合はご利用いただけません</p>
                      </div>
                    </div>
                  </main>
                </div>
              </div>

              <p style={{ textAlign: 'center' }}><strong><span></span></strong></p>
              <hr />
              <p style={{ textAlign: 'center' }}><span style={{ fontSize: '18px' }} ><span style={{ color: 'rgb(227, 108, 9)' }}><strong></strong></span></span></p>
              <p style={{ textAlign: 'center' }}><span style={{ fontSize: '18px' }} ><span style={{ color: 'rgb(227, 108, 9)' }}><strong>2020年8月にHULFTクラウドストレージオプションの機能アップデートを予定していおりますので、<br /></strong><strong>是非ご期待ください！</strong></span></span></p>
              <hr />
              <p style={{ textAlign: 'center' }}><span ><span><strong></strong></span></span></p>
              <ul class="title-caps-bold">
                <li class="title-caps-bold"><span></span></li>
              </ul>

              <div id="HTMLBlock121660" class="HTMLBlock">
                <h3 class="hdg-l3">関連動画</h3>
                <hr style={{ height: '3px ', background: 'black' }} noshade />
              </div>

              <div id="HTMLBlock121667" class="HTMLBlock">
                <div style={{ textAlign: 'center' }}>
                  <h3>HULFTクラウドストレージオプション【機能紹介】</h3>
                  <iframe style={{ width: '560px', height: '315px' }} src="https://www.youtube.com/embed/MVBokuXyPlU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br />
                <br />
                <div style={{ textAlign: 'center' }}>
                  <h3>HULFTクラウドストレージオプション【操作デモ】</h3>
                  <iframe style={{ width: '560px', height: '315px' }} src="https://www.youtube.com/embed/nSKt5CX-tLA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>


          <div id="HTMLBlock121412" class="HTMLBlock">
            <div class="content-fluid-03">
              <div class="content-inner">
                <h2 class="hdg-l2" style={{ marginTop: '0px', border: 'none' }}>関連製品・資料</h2>
                <div class="grid" data-col="2" data-break="true">
                  <div class="grid-col">
                    <div class="nav-panel">
                      <a href="/software/hulft-8">
                        <div class="media">
                          <div class="media-item">
                            <img src={index_fig_05} alt="HULFT8 企業内・企業間通信ミドルウェアのデファクトスタンダード" />
                          </div>
                        </div>
                        <p class="nav-txt">企業内・企業間通信ミドルウェアのデファクトスタンダード</p>
                        <p class="nav-link">詳しく見る</p>
                      </a>
                    </div>
                  </div>

                  <div class="grid-col">
                    <div class="lyt-cv">
                      <p class="lyt-btn"><a href="/download/" class="btn-primary">HULFT クラウドストレージオプション<br />評価版ダウンロード</a></p>
                      <p class="lyt-txt">HULFTクラウドストレージオプションを60日間無料でお試しいただけます。導入検討、動作検証等にぜひご活用ください。またインストール時の不明点や、評価期間中の製品に関する技術的なご質問にお答えする評価版専用のサポート窓口もご用意しております。こちらもあわせてご利用ください。</p>
                      <p class="lyt-btn"><a href="/contact" class="btn-primary">お問い合わせ・資料請求</a></p>
                      <p class="lyt-txt">HULFTクラウドストレージオプションに関するお問い合わせや資料請求を承っております。お気軽にお問い合わせください。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
