export default async function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
      <h1 className="text-4xl font-bold mb-6">İletişim</h1>
      <p className="text-lg text-gray-600 mb-8">
        Bizimle iletişime geçmek için aşağıdaki formu kullanabilirsiniz.
      </p>
      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Adınız"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          placeholder="E-posta Adresiniz"
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          placeholder="Mesajınız"
          className="w-full px-4 py-2 border rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Gönder
        </button>
      </form>
    </div>
  );
}