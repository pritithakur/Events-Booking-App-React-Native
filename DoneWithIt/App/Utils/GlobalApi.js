import { request, gql } from 'graphql-request'

const MASTER_URL ="https://api-ap-south-1.hygraph.com/v2/clv1zk09q276407wbnaadvu3y/master"
const getSliders=async()=>{
    const query = gql`
    query getSlider {
        sliders{
          id
          name
          image{
            url
          }
        }
      } 
`
result = await request(MASTER_URL, query)
return result;
}

const getCategories=async()=>{
  const query = gql`
  query getCategory {
    categories{
      id
      catName
      icon{
        url
      }
    }
  }
`
result = await request(MASTER_URL, query)
return result;
}
const getHotel=async()=>{
  const query = gql`
  query getHotels {
    hotels {
      id
      name
      location
      price
      description
      hotelcategory {
        ... on Category {
          id
          catName
        }
      }
      image {
        url
      }
      facilities {
        fname
        icon {
          url
        }
      }
    }
  }  
  
`
result = await request(MASTER_URL, query)
return result;
}
const getCity=async()=>{
  const query = gql`
  query getCity {
    cities {
      id
      city
      icon {
        url
      }
    }
  }
`
result = await request(MASTER_URL, query)
return result;
}

export default{
    getSliders, getCategories, getCity, getHotel
}
