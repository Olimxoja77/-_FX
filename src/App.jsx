
import './App.css'
import React, { useState,useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";



import "aos/dist/aos.css";

function App() {


  const [visibleText, setVisibleText] = useState(""); // Yozilayotgan matn
  const text = "Alowishus Delicious Coffee"; // Yozilishi kerak bo'lgan matn

  useEffect(() => {
    AOS.init();

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setVisibleText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval); // Matn tugaganda intervalni to'xtatamiz
        setTimeout(() => setVisibleText(""), 2000); // 2 soniyadan keyin tozalash
      }
    }, 150); // Harf yozilish tezligi

    return () => clearInterval(interval); // Tozalash funksiyasi
  }, []);






  const handleButtonClick = () => {
    alert("Zakaz qabul qilindi!");
  };




  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Initialize AOS animations
  React.useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, email, phone } = formData;

    if (name && email && phone) {
      alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    } else {
      alert("Please fill out all fields!");
    }
  };
  
  return (
    <>
{/* \ */}

      <header data-aos="fade-right">
        <img src="./1.png" alt="" />
        <p>Home</p>
       <a href="./Menu.jsx"> <p >Cafe Menu</p></a>
        <p>About Us</p>
        <p>Find Us</p>
       
        <img src="./2.png" alt="" className='a' />
        <button>Buy gift vouchers</button>
      </header>
      <br /><br /><br /><br /><br /><br />
      <main>
        <div className="div"  >
          <div className="left">
            <h1 data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500"
              >    {visibleText} <img src="./4.png" alt=""  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='v' /></h1>
            <p className='qsqs' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</p>
            <div className="car" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">
              <button className='btn' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500">Download App</button>
              <h2 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500">Shop Coffee</h2>
            </div>

          </div>
          <div className="right">
            <img src="./3.png" alt="" className='img1' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500" />
            <img src="./4.png" alt="" className='img2' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
               />
            <img src="./5.png" alt="" className='img3' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500" />
          </div>

        </div>
        <img src="./9.png" alt="" className='img5' />
        <br /><br /><br /><br />
        <h1 data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"> Explore Our Alowishus</h1>


        <div className="div1">
          <div className="card1" data-aos="zoom-in-up">
            <h2 className='img4' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Our Catering</h2>
            <p data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Alowishus Catering, delicious drop off Catering</p>
            <div className="cards">
              <img src="./6.png" alt="" />
              <button>Order cathering</button>
            </div>
          </div>
          <div className="card1" data-aos="zoom-in-up">
            <h2 className='img4' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">The Food</h2>
            <p data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Our entire menu is available as dine in or takeaway.</p>
            <div className="cards">
              <img src="./8.png" alt="" /><br /><br />
              <button>food menu</button>
            </div>
            
          </div>
          <div className="card1" data-aos="zoom-in-up">
            <h2 className='img4' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">The Gelato</h2>
            <p data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Life is like GELATO, enjoy it before it melts.</p>
            <div className="cards">
              <img src="./7.png" alt="" /><br /><br />
              <button>Discover more</button>
            </div>
          </div>
        </div>

<br />
<br /><br />
        
        
        <div class="container">
    <div class="da">
  
      <img src="https://www.seriouseats.com/thmb/MS_5p-UVwIHCrr5MaXonYJajP7o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__06__20180613-coffee-vs-espresso-vicky-wasik-3-1500x1125-418fa2a14e7249b18040c2c34bf8569c.jpg" alt="" id='img1' /><br />
      <h3>Espresso</h3><br />
      <p id='p1'>$3.50</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
      
    </div>
    <div class="da">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVnUgGP6ADE_fnololFjuynqQOuCrCdwS1w&s" alt="" id='img1' /><br />
      <h3>Latte</h3><br />
      <p id='p1'>$4.00</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://www.livingnorth.com/images/media/articles/food-and-drink/eat-and-drink/coffee.png?" alt="" id='img1' /><br />

      <h3>Cappuccino</h3><br />
      <p id='p1'>$4.50</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://hoxtoncoffee.com/cdn/shop/articles/latte-art-on-mocha_1200x1200.jpg?v=1660069726" alt="" id='img1' /><br />

      <h3>Mocha</h3><br />
      <p id='p1'>$4.75</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://dolo.com.au/cdn/shop/articles/522979505-shutterstock_1973536478.jpg?v=1690528484" alt="" id='img1' /><br />

      <h3>Americano</h3><br />
      <p id='p1'>$3.25</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://www.thespruceeats.com/thmb/HXaU0FwlEoZ6d5MoPVzGCXKx41k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/85153452-56a176765f9b58b7d0bf84dd.jpg" alt="" id='img1' /><br />

      <h3>Macchiato</h3><br />
      <p id='p1'>$4.25</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://cdn.shopify.com/s/files/1/0660/8571/6215/files/Flat_White.jpg?v=1682415837" alt="" id='img1' /><br />

      <h3>Flat White</h3><br />
      <p id='p1'>$4.00</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://thelittlestcrumb.com/wp-content/uploads/iced-coffee-with-ice-cream-featured-image.jpg" alt="" id='img1' /><br />

      <h3>Iced Coffee</h3><br />
      <p id='p1'>$3.75</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://www.seriouseats.com/thmb/d_swuilkL-RdPSraL5HZ-9LcIec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__06__20200619-cold-brew-coffee-daniel-gritzer-2-d00e5b0992ce4553b768231be21b75be.jpg" alt="" id='img1' /><br />

      <h3>Cold Brew</h3><br />
      <p id='p1'>$4.50</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://weaverscoffee.com/cdn/shop/articles/Iced_caramel_Frappuccino_coffee_in_a_tall_glass_with_syrup_and_whipped_cream._1000x.jpg?v=1688311688" alt="" id='img1' /><br />

      <h3>Frappuccino</h3><br />
      <p id='p1'>$5.00</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://tornadoughalli.com/wp-content/uploads/2021/09/CHAI-LATTE-2-1-500x500.jpg" alt="" id='img1' /><br />

      <h3>Chai Latte</h3><br />
      <p id='p1'>$4.25</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://i.pinimg.com/736x/00/b3/b5/00b3b51938c45ab3b729f9faecb274b7.jpg" alt="" id='img1' /><br />

      <h3>Matcha Latte</h3><br />
      <p id='p1'>$4.75</p><br />
            <button id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrv9L2FzzaJd_nBbhkU3p7rODxdj0xro_ugw&s" alt="" id='img1' /><br />

      <h3>Hot Chocolate</h3><br />
      <p id='p1'>$3.50</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://www.cafedumonde.co.uk/media/2750/leaf-tea.jpeg?width=540&height=405&v=1d9b89dfb43a170" alt="" id='img1' /><br />

      <h3>Tea</h3><br />
      <p id='p1'>$2.75</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
    <div class="da">
    <img src="https://i0.wp.com/cookingitalians.com/wp-content/uploads/2024/07/img-RDN4ZfjtP5hB22jQgDlEB.jpeg?fit=1536%2C1536&ssl=1" alt="" id='img1' /><br />

      <h3>Affogato</h3><br />
      <p id='p1'>$5.50</p><br />
      <button  onClick={handleButtonClick} id='btn12'>buy</button>
    </div>
  </div>













        <div className="div3" data-aos="fade-up"
          data-aos-duration="3000">
          <div className="left4">
            <img src="./10.png" alt="" />
          </div>
          <div className="right4">
            <h1 className='hq' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Order Your Favourite Coffee</h1>
            <br />
            <p data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <br />
            <button data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Order Now</button>
          </div>
        </div><br /><br /><br /><br /><br /><br />
        <div className="aaa">
          <div id="app">
            <div className="cards2 " data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">
              <img src="./11.png" alt="Product 1" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500" />
              <img src="./12.png" alt="Product 2" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500" />
              <p className="asd" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500">
                Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
              </p>
              <div className="cards3" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500">
                <b>$59.99</b>
                <button className="btn3" onClick={handleOpenModal}>
                  Order now
                </button>
              </div>
            </div>

            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <h2>Order Confirmation</h2>
                  <p>Thank you for your order!</p><br /><br />
                  <h1 className='xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, provident aut, rem excepturi reiciendis ipsum eligendi quaerat laborum sed veniam corporis error? Repellat voluptates aperiam harum commodi assumenda natus beatae.</h1>
                  <button className="btn3" onClick={handleCloseModal}>
                    Close
                  </button>
                  <br /><br /><br />
                </div>
              </div>
            )}
          </div>
          <div id="app">
            <div className="cards2" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">
              <img src="./11.png" alt="Product 1" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500" />
              <img src="./12.png" alt="Product 2" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500" />
              <p className="asd" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500">
                Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
              </p>
              <div className="cards3"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500">
                <b>$59.99</b>
                <button className="btn3" onClick={handleOpenModal}>
                  Order now
                </button>
              </div>
            </div>

            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <h2>Order Confirmation</h2>
                  <p>Thank you for your order!</p>
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, provident aut, rem excepturi reiciendis ipsum eligendi quaerat laborum sed veniam corporis error? Repellat voluptates aperiam harum commodi assumenda natus beatae.</h1>
                  <button className="btn3" onClick={handleCloseModal}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
          <div id="app">
            <div className="cards2" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">
              <img src="./11.png" alt="Product 1" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500" />
              <img src="./12.png" alt="Product 2" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500" />
              <p className="asd" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500">
                Amet minim mollit non deserunt dolor ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
              </p>
              <div className="cards3"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500" >
                <b>$59.99</b>
                <button className="btn3" onClick={handleOpenModal}>
                  Order now
                </button>
              </div>
            </div>

            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <h2>Order Confirmation</h2>
                  <p>Thank you for your order!</p>
                  <button className="btn3" onClick={handleCloseModal}>
                    Close
                  </button>
                  <h1 className='h123'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, non! Officiis dignissimos obcaecati tempora cumque, iure voluptatum fuga quisquam eos ad, nulla, temporibus quae! Rerum quod libero vero delectus iure?</h1>
                </div>
              </div>
            )}
          </div>
        </div>
        <br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <h1 data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500">Best Selling Coffee</h1>
        <p className='p1' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500">A drink from the ‘My Alowishus’ bottled brews range OR grab one of our delicious coffee’s.</p>


        <img src="./18.png" alt="" className='img7' />
        <div className="div5">
          <div className="left5">
            <h1 data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Instant Coffee At Your Home</h1>
            <p data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>
            <button data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Download our app</button>
          </div>
          <div className="right5">
            <img src="./17.png " alt="" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500" />
          </div>
        </div>
        <div className="div6">
          <div className="left6" >
            <div className="cards4" data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500">
              <img src="./19.png" alt="" />
              <div className="b">
                <h5>Brooklyn Simmon  ⭐️⭐️⭐️⭐️⭐️</h5>
                <p>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia”</p>
              </div>
            </div>
            <div className="cards4"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500">
              <img src="./20.png" alt="" />
              <div className="b">
                <h5>Imam White  ⭐️⭐️⭐️⭐️⭐️</h5>
                <p>“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia”</p>
              </div>
            </div>

          </div><br /><br /><br />
          <img src="./27.png" alt="" className='asdf' />
          <div className="right6" >
            <h1 data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">What Our Customers Say</h1><br /><br /><br />
            <div className="c">
              <h4>4.9</h4>
              <div className="a">
                <h6 data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="2500">⭐️⭐️⭐️⭐️⭐️</h6>
                <h6 data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="2500">based on 2452+ reviews</h6>
              </div>
            </div>

          </div>
        </div>
        <div className="div7">
          <div className="left7">
            <img src="./23.png" alt="" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500" />
            <p className='p22' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">We made it our mission to create community everyday and grow meaningful, lasting relationships with our staff, our suppliers and of course you, our customers.</p>
          </div>
          <div className="right7">
            <b data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Contact Alowishus!</b>
            <div className="cards5">
              <img src="./25.png" alt="" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500" />
              <h6 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500"> alowishus@gmai.com</h6>
            </div>
            <div className="cards5">
              <img src="./24.png" alt="" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500" />
              <h6 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500">+110 214 214 2451</h6>
            </div>

          </div>
        </div>
        <div className="div8">
          <div className="left8">
            <h1 className='hy' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500"> Store Locations</h1>
            <p className='p3' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Find your nearest Alowishus store with opening hours, location and contact details.</p>
            <h6 className='h6' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Find my Alowishus <img src="21.png" alt="" className='icon1' /></h6>
          </div>
          <div className="right8">
            <h1 className='hy'
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500" > First One’s On Us!</h1>
            <input type="text" name="" id="" placeholder='E-mail' data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500" />
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500">Subscribe</button>
          </div>
        </div>
        <div className="df">
       
  
          <div className="didi">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47959.550853570654!2d69.16220809475097!3d41.29859602594643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1750353551647!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2500"></iframe>
          </div>
          <form
      onSubmit={(e) => e.preventDefault()}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="2500"
      className="form-container"
    >
      <input
        type="text"
        id="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2600"
      />
      <input
        type="email"
        id="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2700"
      />
      <input
        type="text"
        id="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2800"
      />
      <button
        type="button"
        onClick={handleSubmit}
        id="btn"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        Send
      </button>
    </form>
        </div>
        <hr data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500" />
      </main>

      <footer>
        <div className="dfg">
          <h1 className='ht' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500">Copytright © 2022 Alowishus Delicious</h1>
          <h1 className='ht' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500">Terms of Use | Privacy Policy</h1>
        </div>






        <div className="cards6" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500">
          <div className="z">
            <a href="https://youtu.be/nWZroDVghz8?t=1">  <img src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png" alt="" className='ico' /></a><h1 id='h1'> Alowishus@gmail.com</h1>
          </div>
          <div className="z">
            <a href="https://www.instagram.com/p/DJm7zsqylI5/?igsh=NjViZnpiajkzdmg2"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CIS-A2K_Instagram_Icon_%28Black%29.svg/2048px-CIS-A2K_Instagram_Icon_%28Black%29.svg.png" alt="" className='icon' /></a>
            <h1 id='h1'> Alowishus@gmail.com</h1>
          </div>
          <div className="z">
            <a href="https://alowishus.com.au/">   <img src="https://img.icons8.com/ios_filled/512/telegram.png" alt="" className='icon' /></a>
            <h1 id='h1'> Alowishus@gmail.com</h1>
          </div>
          <div className="zz">
            <a href=""> <img src="https://img.icons8.com/ios11/512/facebook-new.png" alt="" className='iconn' />
            </a>
            <h1 id='h1'> Alowishus@gmail.com</h1>
          </div>
        </div>
      </footer>






    </>
  )
}

export default App
