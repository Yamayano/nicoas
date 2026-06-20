import React, { useState } from 'react';
import { 
  Check, 
  Mail, 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight, 
  BookOpen, 
  Compass, 
  Target, 
  User 
} from 'lucide-react';
import { CONFIG } from './config';
import heroImg from './assets/hero-illustration.png';
import mascotImg from './assets/quokka-mascot.png';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleApplyClick = () => {
    window.open(CONFIG.googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLineClick = () => {
    window.open(CONFIG.lineUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container navbar">
          <a href="#" className="logo">
            <img src={mascotImg} alt="nicoas Logo" />
            <span>nicoas</span>
          </a>

          {/* Navigation Menu */}
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="#service" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                サービス
              </a>
            </li>
            <li>
              <a href="#story" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                ストーリー
              </a>
            </li>
            <li>
              <a href="#pricing" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                料金プラン
              </a>
            </li>
            <li>
              <a href="#commitment" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                こだわり
              </a>
            </li>
            <li>
              <a href="#voice" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                利用者の声
              </a>
            </li>
            {/* Mobile Actions */}
            {mobileMenuOpen && (
              <li style={{ width: '100%', marginTop: '20px' }}>
                <button 
                  id="mobile-nav-cta"
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  onClick={() => {
                    handleApplyClick();
                    setMobileMenuOpen(false);
                  }}
                >
                  無料体験に申し込む
                </button>
              </li>
            )}
          </ul>

          {/* Desktop Actions */}
          <div className="nav-actions">
            <a href={`mailto:${CONFIG.contactEmail}`} className="nav-btn-login">
              お問い合わせ
            </a>
            <button 
              id="desktop-nav-cta"
              className="nav-btn-cta" 
              onClick={handleApplyClick}
            >
              無料でお試し
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            id="menu-toggle-btn"
            className="menu-toggle" 
            onClick={toggleMobileMenu} 
            aria-label="メニューを開閉"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-title-tag">対話が生む、受験の新しいカタチ</span>
            <h1 className="hero-heading">
              「ないもの」を数えるのは<br />
              <span>もうやめよう。</span>
            </h1>
            <p className="hero-text">
              足りないものばかりに目を向けていませんか？<br />
              あなたが持っている本当の力を見つけ出し、<br />
              理想の未来へ進みましょう。
            </p>
            <div className="hero-ctas">
              <button 
                id="hero-cta-trial"
                className="btn btn-primary btn-lg" 
                onClick={handleApplyClick}
              >
                体験レッスンはこちら <ArrowRight size={18} />
              </button>
              <button 
                id="hero-cta-line"
                className="btn btn-outline btn-lg" 
                onClick={handleLineClick}
              >
                まずは相談する
              </button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img 
                src={heroImg} 
                className="hero-image" 
                alt="将来を見つめる少女のイラスト" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="section section-bg-light story">
        <div className="container">
          <div className="story-header">
            <span className="section-tag">Story</span>
            <h2 className="story-heading">ある一人の少女が、人生を変えた日の話を。</h2>
          </div>
          <div className="story-card">
            <p className="story-text">
              自分のやりたいことが見つからず、周りと比べて焦っていたあの日。
              <br /><br />
              そんな時に出会ったのが、対話を通じて強みを引き出してくれるコーチングでした。
              <br /><br />
              <span className="story-highlight">『自分には何もない』</span>と思っていたけれど、
              コーチとの対話の中で、自分の奥底に眠っていた情熱や強みに気づかされました。
              <br /><br />
              『ないもの』を羨むのではなく、<span className="story-highlight">『すでにあるもの』を磨いていく。</span>
              <br /><br />
              その瞬間から、私の人生の第2章が始まりました。
              <br /><br />
              次は、あなたの番です。
              自分だけの強みを見つけ、新しい一歩を踏み出しませんか？
            </p>
          </div>
        </div>
      </section>

      {/* Service Intro Section */}
      <section id="service" className="section service-intro">
        <div className="container service-intro-grid">
          <div>
            <span className="section-tag">Service</span>
            <h2 className="service-intro-heading">受験を、もっと幸せな時間に。</h2>
            <p className="service-intro-text">
              私たちは、受験をただの合格・不合格の勝負だとは考えていません。
              自分と向き合い、強みを見つけ、人間として大きく成長する機会です。
              {"\n\n"}
              『コーチング×受験指導』
              {"\n"}
              この新しいアプローチで、あなたの受験勉強を
              『苦しいだけの時間』から『自分の可能性を広げる幸せな時間』へと変えていきます。
            </p>
          </div>
          <div className="service-intro-mascot-container">
            <div className="service-intro-mascot-bg"></div>
            <div className="service-intro-mascot">
              <img src={mascotImg} alt="マスコットキャラクターのクオッカ" />
              <div style={{ textAlign: 'center', marginTop: '16px', fontWeight: '800', color: '#2563eb', fontSize: '1.8rem', fontFamily: 'Outfit' }}>
                nicoas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section section-bg-light pricing">
        <div className="container">
          <div className="pricing-header">
            <span className="section-tag">Plan</span>
            <h2 className="pricing-heading">料金プラン</h2>
          </div>

          <div className="pricing-grid">
            {/* Standard Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <span className="pricing-plan-type">STANDARD</span>
                <h3 className="pricing-plan-title">基本コーチングプラン</h3>
                <div className="pricing-plan-price">
                  <span className="price-amount">8,800円</span>
                  <span className="price-unit">/ 月（税込）</span>
                </div>
              </div>
              <p className="pricing-plan-description">
                まずはコーチングを試してみたい方におすすめのプランです。月1回のセッションで、自分の現在地と目標をクリアにします。
              </p>
              <ul className="pricing-plan-features">
                <li>
                  <Check size={18} />
                  <span>月1回のパーソナルセッション</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>LINEでの無制限メッセージ相談</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>目標設定シートの作成</span>
                </li>
              </ul>
              <button 
                id="pricing-apply-standard"
                className="btn btn-outline" 
                onClick={handleApplyClick}
              >
                プランに申し込む
              </button>
            </div>

            {/* Recommended Plan */}
            <div className="pricing-card recommended">
              <span className="recommended-badge">RECOMMENDED</span>
              <div className="pricing-card-header">
                <span className="pricing-plan-type">MAIN COURSE</span>
                <h3 className="pricing-plan-title">伴走コーチング×学習コース</h3>
                <div className="pricing-plan-price">
                  <span className="price-amount">30,800円</span>
                  <span className="price-unit">/ 月（税込）</span>
                  <span className="price-amount-secondary">61,600円<span className="price-unit">/ 月（税込）</span></span>
                </div>
              </div>
              <p className="pricing-plan-description">
                日々の学習習慣を身につけ、コーチと二人三脚で志望校合格に向けて徹底的に取り組むメインコースです。
              </p>
              <ul className="pricing-plan-features">
                <li>
                  <Check size={18} />
                  <span>週1回 / 隔週のパーソナルセッション</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>日々の学習進捗管理</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>LINEでの無制限メッセージ相談</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>オーダーメイド学習計画の作成</span>
                </li>
              </ul>
              <button 
                id="pricing-apply-recommended"
                className="btn btn-primary" 
                onClick={handleApplyClick}
              >
                プランに申し込む
              </button>
            </div>

            {/* Coming Soon Plan */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <span className="pricing-plan-type">PREMIUM</span>
                <h3 className="pricing-plan-title">大学受験フルサポートコース</h3>
                <div className="pricing-plan-price" style={{ margin: '16px 0' }}>
                  <span className="price-amount" style={{ color: '#64748b' }}>Coming Soon...</span>
                </div>
              </div>
              <p className="pricing-plan-description">
                受験コーチングに加え、志望校対策や科目指導までトータルでサポートする最上位プランです。近日中に詳細を公開いたします。
              </p>
              <ul className="pricing-plan-features">
                <li>
                  <Check size={18} />
                  <span>週1回のパーソナルセッション</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>24時間質問対応（全科目）</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>志望校別個別カリキュラムの作成</span>
                </li>
              </ul>
              <button 
                id="pricing-apply-soon"
                className="btn btn-outline" 
                disabled 
                style={{ opacity: 0.6, cursor: 'not-allowed' }}
              >
                案内を受け取る
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section (nicoasのこだわり) */}
      <section id="commitment" className="section features">
        <div className="container">
          <div className="features-header">
            <span className="section-tag">Commitment</span>
            <h2 className="features-heading">今後の成長に寄り添い、次なるステージへ</h2>
            <p className="features-intro-text">
              nicoasでは、単なる知識の伝達にとどまらず、生徒が自ら考え行動する力を育みます。そのための3つのアプローチをご紹介します。
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Target size={28} />
              </div>
              <h3 className="feature-title">コーチングによる主体性の育成</h3>
              <p className="feature-description">
                対話を通じて、生徒自身が『なぜ勉強するのか』『将来どうなりたいのか』を掘り下げます。自分で決めた目標だからこそ、主体的に取り組むことができます。
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <BookOpen size={28} />
              </div>
              <h3 className="feature-title">個々の状況に合わせた学習計画</h3>
              <p className="feature-description">
                現在の学力や志望校、日々の生活スタイルに合わせて、オーダーメイドの学習カリキュラムを作成します。何をすればいいか迷う時間がなくなります。
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Compass size={28} />
              </div>
              <h3 className="feature-title">日々の伴走による学習習慣の定着</h3>
              <p className="feature-description">
                週1回のセッションだけでなく、日々の進捗報告や質問対応を通じて、学習習慣の定着をサポートします。孤独になりがちな受験勉強を支えます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (利用者の声) */}
      <section id="voice" className="section testimonials">
        <div className="container">
          <div className="testimonials-header">
            <span className="section-tag">Voice</span>
            <h2 className="testimonials-heading">利用者の声</h2>
          </div>

          <div className="testimonials-container">
            <div className="testimonials-inner">
              {/* Testimonial 1 */}
              <div className="testimonial-block">
                <div className="testimonial-avatar">A</div>
                <div className="testimonial-content">
                  <span className="testimonial-author">高校2年生 / Aさん</span>
                  <p className="testimonial-quote">
                    「自分には無理」と思っていた志望校でしたが、コーチと対話する中で「どうすればできるか」を考えられるようになり、成績も伸びて自信がつきました。
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial-block">
                <div className="testimonial-avatar">B</div>
                <div className="testimonial-content">
                  <span className="testimonial-author">高校3年生 / Bさん</span>
                  <p className="testimonial-quote">
                    勉強の計画を立てるのが苦手でしたが、オーダーメイドの計画を作成してもらい、日々の進捗も管理してくれるので、迷いなく勉強に集中できました。
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="testimonial-block">
                <div className="testimonial-avatar">C</div>
                <div className="testimonial-content">
                  <span className="testimonial-author">既卒生 / Cさん</span>
                  <p className="testimonial-quote">
                    モチベーションの維持が難しかった浪人生活でしたが、週1回のコーチングセッションが良いリフレッシュになり、最後まで走りきることができました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-left">
              <span className="cta-tag">体験レッスン・個別面談受付中</span>
              <h2 className="cta-title">
                個別体験入塾はこちら
              </h2>
              <button 
                id="cta-apply-main"
                className="btn btn-primary btn-lg" 
                onClick={handleApplyClick}
              >
                無料体験に申し込む <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="cta-right">
              <button 
                id="cta-line-btn"
                className="cta-method line" 
                onClick={handleLineClick}
              >
                <div className="cta-icon-wrapper">
                  <MessageCircle size={24} />
                </div>
                <div className="cta-method-info">
                  <div className="cta-method-name">LINEで相談する</div>
                  <div className="cta-method-desc">友だち追加で簡単にお問い合わせできます</div>
                </div>
              </button>

              <a 
                id="cta-email-link"
                href={`mailto:${CONFIG.contactEmail}`} 
                className="cta-method email"
              >
                <div className="cta-icon-wrapper">
                  <Mail size={24} />
                </div>
                <div className="cta-method-info">
                  <div className="cta-method-name">メールで問い合わせる</div>
                  <div className="cta-method-desc">{CONFIG.contactEmail}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={mascotImg} alt="nicoas Logo" />
                <span>nicoas</span>
              </div>
              <p className="footer-desc">
                「ないもの」を数えるのをやめ、すでにある強みを磨き、合格の先にある理想の未来へ歩みを進めるための伴走コーチング指導塾。
              </p>
            </div>
            <div className="footer-links-group">
              <ul className="footer-links">
                <li><a href="#service">サービス内容</a></li>
                <li><a href="#story">ストーリー</a></li>
                <li><a href="#pricing">料金プラン</a></li>
              </ul>
              <ul className="footer-links">
                <li><a href="#" onClick={(e) => e.preventDefault()}>利用規約</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>プライバシーポリシー</a></li>
                <li><a href={`mailto:${CONFIG.contactEmail}`}>お問い合わせ</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 nicoas. All rights reserved.</p>
            <p>Gmail: {CONFIG.contactEmail}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
