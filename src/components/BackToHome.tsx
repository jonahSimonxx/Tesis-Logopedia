import Link from 'next/link'

const BackToHome = () => (
  <div className="hero__cta" style={{ marginTop: '48px' }}>
    <Link href="/" className="glass glass-btn glass-btn--primary">
      ← Volver al inicio
    </Link>
  </div>
)

export default BackToHome
