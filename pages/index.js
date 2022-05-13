import React from 'react';
import { Product, FooterBanner, HeroBanner } from '../components';
import { client } from '../lib/client';

const Home = ({ bannerData, products }) => {
  return (
    <div>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>best selling Product</h2>
        <p>speakers of many variationals</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner FooterBanner={bannerData && bannerData[0]} />
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerquery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerquery);
  return {
    props: { products, bannerData },
  };
};

export default Home;
