import { useState, FormEvent } from 'react';

interface FormData {
  email: string;
  message: string;
}

interface FormMessage {
  text: string;
  type: 'success' | 'error' | '';
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: '',
  });
  const [formMessage, setFormMessage] = useState<FormMessage>({
    text: '',
    type: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const apiURL = 'https://formspree.io/f/xjkgaakp';

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage({ text: '', type: '' });

    const form = new FormData();
    form.append('email', formData.email);
    form.append('message', formData.message);

    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        body: form,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormMessage({
          text: '✅ Message sent successfully!',
          type: 'success',
        });
        setFormData({ email: '', message: '' }); // Reset form
      } else {
        setFormMessage({
          text: '❌ Message failed to send.',
          type: 'error',
        });
      }
    } catch (error) {
      setFormMessage({
        text: '❌ Something wrong. Try Again',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="pt-16 md:pt-24 pb-16 md:pb-32 dark:bg-dark lg:h-fit flex items-center justify-center">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-bold text-lg text-primary mb-2">Contact</h4>
            <h2 className="font-bold text-dark dark:text-white text-3xl mb-4">
              Contact Me
            </h2>
            <p className="font-medium text-md text-secondary dark:text-slate-300">
              For questions, suggestions, or criticism, please message me.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="w-full lg:w-2/3 mx-auto">
            <div className="w-full px-4 mb-6">
              <label
                htmlFor="email"
                className="text-base font-bold text-primary block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full bg-slate-100 dark:bg-slate-700 text-dark dark:text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50"
              />
            </div>

            <div className="w-full px-4 mb-6">
              <label
                htmlFor="message"
                className="text-base font-bold text-primary mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="w-full bg-slate-100 dark:bg-slate-700 text-dark dark:text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary h-32 disabled:opacity-50 resize-none"
              />
            </div>

            <div className="w-full px-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-base font-semibold rounded-full text-white bg-primary py-3 px-8 hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {formMessage.text && (
              <div
                className={`text-center mt-4 text-base font-semibold ${
                  formMessage.type === 'success'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`}>
                {formMessage.text}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
