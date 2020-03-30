import Head from 'next/head'
import OptInForm from '../components/OptInForm'
const Home = () => (
  <div className="container mx-auto px-4 md:px-0">
    <Head>
      <title>Kick Pharmaceuticals Inc.</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <img src="/kick-logo.png" class="max-w-md mx-auto" />
    <div class="max-w-xl mx-auto">
      <p class="font-bold text-blue-500 text-lg">About Kick Pharmaceuticals Inc.</p>
      <p class="mt-4 text-gray-800">Kick Pharmaceuticals is a biotech innovator, with a patented synthetic cannabinoid transdermal drug delivery technology. Deploying this patented technology, medical grade FDA approved synthetic cannabinoid, NABILONE will be delivered through proprietary transdermal technology to revolutionize treatment for patients undergoing chemotherapy to alleviate side effects.</p>
      <p class="font-bold mt-10 text-center">Enter your email to received updates.</p>
      <OptInForm />
    </div>
  </div>
)

export default Home
