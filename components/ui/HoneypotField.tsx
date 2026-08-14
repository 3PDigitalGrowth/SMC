// Bot bait. Hidden from sighted users and from screen readers, and skipped by
// keyboard tabbing, so anything that arrives with a value came from a script.
// Read on submit with new FormData(form).get('company').

export default function HoneypotField() {
  return (
    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: 1, height: 1, overflow: 'hidden' }}>
      <label htmlFor="company-website">Company website</label>
      <input
        id="company-website"
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  )
}
