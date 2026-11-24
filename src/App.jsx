import { useState } from "react";
import {
  BookOpen,
  Calculator,
  Palette,
  Music,
  Star,
  Heart,
  Play,
  Clock,
  Trophy,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Smile,
} from "lucide-react";
import "./App.css";

const categories = [
  {
    id: "membaca",
    name: "Membaca",
    description: "Belajar huruf dan cerita",
    icon: BookOpen,
    color: "pink",
    lessons: 12,
  },
  {
    id: "berhitung",
    name: "Berhitung",
    description: "Serunya belajar angka",
    icon: Calculator,
    color: "blue",
    lessons: 10,
  },
  {
    id: "kreativitas",
    name: "Kreativitas",
    description: "Menggambar dan mewarnai",
    icon: Palette,
    color: "yellow",
    lessons: 8,
  },
  {
    id: "musik",
    name: "Musik",
    description: "Bernyanyi sambil belajar",
    icon: Music,
    color: "purple",
    lessons: 6,
  },
];

const initialLessons = [
  {
    id: 1,
    title: "Mengenal Huruf ABC",
    category: "membaca",
    level: "Pemula",
    duration: "15 menit",
    emoji: "🔤",
    color: "pink",
  },
  {
    id: 2,
    title: "Berhitung 1 sampai 10",
    category: "berhitung",
    level: "Pemula",
    duration: "10 menit",
    emoji: "🔢",
    color: "blue",
  },
  {
    id: 3,
    title: "Mewarnai Dunia Hewan",
    category: "kreativitas",
    level: "Mudah",
    duration: "20 menit",
    emoji: "🦋",
    color: "yellow",
  },
  {
    id: 4,
    title: "Mengenal Nada Musik",
    category: "musik",
    level: "Pemula",
    duration: "12 menit",
    emoji: "🎵",
    color: "purple",
  },
];

function App() {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [completedLessons, setCompletedLessons] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");

  const filteredLessons =
    activeCategory === "semua"
      ? initialLessons
      : initialLessons.filter(
          (lesson) => lesson.category === activeCategory
        );

  const handleComplete = (lesson) => {
    if (completedLessons.includes(lesson.id)) {
      setMessage("Pelajaran ini sudah selesai! Hebat! ⭐");
      return;
    }

    setCompletedLessons([...completedLessons, lesson.id]);
    setMessage(`Yeay! ${lesson.title} berhasil diselesaikan! 🎉`);
  };

  const scrollToLessons = () => {
    document.getElementById("pelajaran")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#beranda" className="brand">
          <span className="brand-icon">🌈</span>
          <span>
            Ceria<span>Belajar</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Buka menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#beranda" onClick={() => setMenuOpen(false)}>
            Beranda
          </a>
          <a href="#kategori" onClick={() => setMenuOpen(false)}>
            Kategori
          </a>
          <a href="#pelajaran" onClick={() => setMenuOpen(false)}>
            Pelajaran
          </a>
          <a href="#tentang" onClick={() => setMenuOpen(false)}>
            Tentang Kami
          </a>
        </nav>

        <button className="nav-button" onClick={scrollToLessons}>
          Mulai Belajar <ArrowRight size={17} />
        </button>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="beranda">
          <div className="hero-content">
            <div className="hero-label">
              <Sparkles size={16} />
              TEMPAT BELAJAR PALING MENYENANGKAN!
            </div>

            <h1>
              Belajar Jadi
              <span>Lebih Seru!</span>
              <span className="heading-decoration">✨</span>
            </h1>

            <p>
              Yuk, bertualang bersama Ceria Belajar! Temukan hal-hal
              baru, bermain, dan kembangkan kreativitasmu setiap hari.
            </p>

            <div className="hero-actions">
              <button className="primary-button" onClick={scrollToLessons}>
                Mulai Petualangan <ArrowRight size={18} />
              </button>
              <a href="#kategori" className="secondary-button">
                <Play size={17} fill="currentColor" />
                Jelajahi Kelas
              </a>
            </div>

            <div className="hero-rating">
              <div className="avatar-group">
                <span>👧</span>
                <span>👦</span>
                <span>👧🏻</span>
              </div>
              <div>
                <div className="rating-stars">★★★★★</div>
                <small>Belajar menyenangkan setiap hari!</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle">
              <div className="hero-illustration">🧒🏻</div>
              <div className="floating-book">📚</div>
              <div className="floating-star star-one">⭐</div>
              <div className="floating-star star-two">🌟</div>
              <div className="floating-pencil">✏️</div>
              <div className="floating-heart">💗</div>
            </div>
            <div className="hero-note">
              <span>🎨</span>
              <div>
                <strong>Belajar & Bermain</strong>
                <small>Jadi lebih menyenangkan!</small>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-section">
          <div className="stat-item">
            <span className="stat-icon pink-icon">
              <Smile />
            </span>
            <div>
              <h3>36+</h3>
              <p>Materi Belajar</p>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon blue-icon">
              <BookOpen />
            </span>
            <div>
              <h3>4</h3>
              <p>Kategori Belajar</p>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon yellow-icon">
              <Star />
            </span>
            <div>
              <h3>100%</h3>
              <p>Keseruan Belajar</p>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-icon purple-icon">
              <Heart />
            </span>
            <div>
              <h3>Happy</h3>
              <p>Happy Learning</p>
            </div>
          </div>
        </section>

        {/* CATEGORY */}
        <section className="section category-section" id="kategori">
          <div className="section-heading">
            <div>
              <span className="section-label">PILIH PETUALANGANMU</span>
              <h2>Belajar Apa Hari Ini? 🎈</h2>
              <p>
                Banyak hal seru yang bisa kamu pelajari. Pilih
                kategori favoritmu!
              </p>
            </div>
          </div>

          <div className="category-grid">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  className={`category-card ${category.color}`}
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    scrollToLessons();
                  }}
                >
                  <span className="category-icon">
                    <Icon size={30} />
                  </span>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <span className="lesson-count">
                    {category.lessons} Pelajaran
                  </span>
                  <span className="category-arrow">
                    <ArrowRight size={18} />
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* LESSONS */}
        <section className="section lessons-section" id="pelajaran">
          <div className="section-heading lesson-heading">
            <div>
              <span className="section-label">KELAS PILIHAN</span>
              <h2>Pelajaran Seru Untukmu! 📚</h2>
              <p>
                Mulai belajar dari materi yang paling kamu sukai.
              </p>
            </div>
            <span className="completed-count">
              <Trophy size={17} />
              {completedLessons.length} Selesai
            </span>
          </div>

          <div className="filter-buttons">
            <button
              className={activeCategory === "semua" ? "active" : ""}
              onClick={() => setActiveCategory("semua")}
            >
              Semua
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={
                  activeCategory === category.id ? "active" : ""
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="lesson-grid">
            {filteredLessons.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id);

              return (
                <article className="lesson-card" key={lesson.id}>
                  <div className={`lesson-image ${lesson.color}`}>
                    <span>{lesson.emoji}</span>
                    <span className="lesson-level">{lesson.level}</span>
                    {isCompleted && (
                      <span className="lesson-done">
                        <CheckCircle size={17} />
                      </span>
                    )}
                  </div>
                  <div className="lesson-content">
                    <span className="lesson-category">
                      {categories.find(
                        (item) => item.id === lesson.category
                      )?.name}
                    </span>
                    <h3>{lesson.title}</h3>
                    <div className="lesson-meta">
                      <span>
                        <Clock size={15} /> {lesson.duration}
                      </span>
                      <span>
                        <Star size={15} fill="currentColor" /> Seru!
                      </span>
                    </div>
                    <button
                      className={
                        isCompleted
                          ? "lesson-button completed"
                          : "lesson-button"
                      }
                      onClick={() => handleComplete(lesson)}
                    >
                      {isCompleted ? "Sudah Selesai" : "Mulai Belajar"}
                      {isCompleted ? (
                        <CheckCircle size={17} />
                      ) : (
                        <ArrowRight size={17} />
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredLessons.length === 0 && (
            <p className="empty-message">Belum ada pelajaran di kategori ini.</p>
          )}

          {message && (
            <div className="toast-message">
              <span>🎉</span>
              {message}
              <button onClick={() => setMessage("")} aria-label="Tutup">
                <X size={16} />
              </button>
            </div>
          )}
        </section>

        {/* PROGRESS */}
        <section className="progress-section">
          <div className="progress-text">
            <span className="section-label">LANGKAH KECIL, PRESTASI BESAR</span>
            <h2>Setiap Hari Jadi Lebih Pintar! 🏆</h2>
            <p>
              Terus belajar dan kumpulkan pengalaman baru. Setiap
              pelajaran yang selesai adalah pencapaian hebat!
            </p>
            <button className="primary-button" onClick={scrollToLessons}>
              Lanjutkan Belajar <ArrowRight size={18} />
            </button>
          </div>

          <div className="progress-card">
            <div className="progress-card-top">
              <span>🌟</span>
              <div>
                <strong>Perjalanan Belajarmu</strong>
                <small>Terus semangat, ya!</small>
              </div>
            </div>
            <div className="progress-numbers">
              <strong>{completedLessons.length} dari 4</strong>
              <span>Pelajaran selesai</span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${(completedLessons.length / 4) * 100}%`,
                }}
              />
            </div>
            <div className="progress-footer">
              <span>Progres Belajar</span>
              <strong>{completedLessons.length * 25}%</strong>
            </div>
            <div className="progress-decoration">🎯 ⭐ 🎈</div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="tentang">
          <div className="cta-decoration">🌈</div>
          <span className="section-label">SIAP UNTUK BELAJAR?</span>
          <h2>
            Ayo Ciptakan Pengalaman
            <span> Belajar yang Ceria!</span>
          </h2>
          <p>
            Mulai petualangan belajar yang menyenangkan bersama
            Ceria Belajar. Karena setiap anak punya potensi luar biasa!
          </p>
          <button className="cta-button" onClick={scrollToLessons}>
            Yuk, Mulai Sekarang! <ArrowRight size={18} />
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#beranda" className="brand footer-brand">
          <span className="brand-icon">🌈</span>
          <span>
            Ceria<span>Belajar</span>
          </span>
        </a>
        <p>Belajar, Bermain & Berkembang! 💗</p>
        <div className="footer-bottom">
          © 2026 Ceria Belajar. Dibuat dengan ❤️ untuk generasi hebat.
        </div>
      </footer>
    </div>
  );
}

export default App;
