import { Form, redirect } from "react-router-dom";

export default function Contact() {
    return (
      <div className="contact">
        <h3>Contact Us</h3>
        <Form method="POST" action="/help/contact">
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your salary:</span>
            <input type="number" name="salary" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>
          <button>Submit</button>
        </Form>
      </div>
    )
  }


  export const contactAction = async ({request}) =>{
    const data = await request.formData()
    const submission = {
      title: data.get('email'),
      salary: data.get('salary'),
      location: data.get('message')
    }

    fetch('http://localhost:4000/careers',{
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(submission)
    })
    .then(res=> res.json())

    return redirect('/')
  }