import { Link } from 'react-router-dom'

function CTAButton({ to, children, variant = 'primary', className = '' }) {
  const baseStyles =
    'btn-3d inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'

  const variants = {
    primary:
      'bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft hover:from-brand-600 hover:to-brand-800',
    secondary:
      'border border-brand-100 bg-white/85 text-brand-900 hover:bg-white',
    accent:
      'bg-gradient-to-br from-accent-300 to-accent-500 text-brand-950 shadow-soft hover:from-accent-200 hover:to-accent-400',
  }

  return (
    <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`.trim()}>
      {children}
    </Link>
  )
}

export default CTAButton
