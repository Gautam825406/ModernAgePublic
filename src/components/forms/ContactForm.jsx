import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function ContactForm({ title = 'Send Us a Message', subtitle = 'We will get back to you within 24-48 hours.' }) {
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      return
    }

    setStatus('success')
    setFormData(initialState)
  }

  return (
    <section className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card sm:p-8">
      <h3 className="font-heading text-2xl font-bold text-brand-950">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{subtitle}</p>

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit} noValidate>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Full Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-lg border border-brand-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            placeholder="Enter your full name"
            required
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-lg border border-brand-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              placeholder="name@example.com"
              required
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-lg border border-brand-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              placeholder="+91 XXXXX XXXXX"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="rounded-lg border border-brand-200 px-4 py-3 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            placeholder="Write your query here"
            required
          />
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Submit Enquiry
        </button>

        {status === 'error' ? (
          <p className="text-sm font-medium text-red-600">Please fill all required fields before submitting.</p>
        ) : null}
        {status === 'success' ? (
          <p className="text-sm font-medium text-emerald-600">Thank you. Your enquiry has been recorded successfully.</p>
        ) : null}
      </form>
    </section>
  )
}

export default ContactForm
