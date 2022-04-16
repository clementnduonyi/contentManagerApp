import Layout from "components/Layout";
import ResourceHighLight from "components/ResourceHighLight";
import NewsLetter from "components/NewsLetter";
import ResourceList from "components/ResourcesList";
import Footer from "components/Footer";



 function Home({resources}) {
 
  return (
    <Layout>
      <ResourceHighLight
      resources = {resources.slice(0, 2)} />
      <NewsLetter />
      <ResourceList
      resources = {resources.slice(2)} />
      <Footer />  
    </Layout>
  )
}

// is called every time the page is visited
//function is executed on the server
// data are always fresh
export async function getServerSideProps(){
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();
  //console.log(data)
  return {
    props: {
      resources: data
    }
  }
}


// is called at the build time and it's called only once
/*export async function getStaticProps(){
 const resData = await fetch("http://localhost:3000/api/resources")
 const data = await resData.json()
  return {
    props: {
      resources: data
    }
  }
}*/



export default Home
