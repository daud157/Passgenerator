import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import AboutUs from './About';
import Contact from './Contact';
import './index.css'
import './App.css'
const Home = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white flex items-center justify-center w-screen">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Secure Your Digital Life <br className=''/> With SecurePass
          </h1>
          <p className="text-lg mb-6">
            SecurePass offers advanced password management solutions, ensuring your online accounts are protected with strong, unique passwords. Simplify your digital security and keep your data safe with SecurePass.
          </p>
          <p className="text-lg mb-6">
            With features like automatic password generation, secure storage, and easy retrieval, SecurePass makes it easier than ever to manage your digital identity. Our tools are designed for both individuals and businesses, providing a robust and reliable way to protect sensitive information.
          </p>
      
          <Link
            to="/signup"
            className="bg-green-500 text-white py-4 px-6 rounded-full hover:bg-white transition duration-300 ml-96 hover:py-8 hover:py-10"
          >
            Get Started
          </Link>
        </div>
        
        {/* Right Side - Image */}
        <div className="md:w-1/2 h-full flex justify-center items-center">
          <div className="w-full max-w-2xl p-4 rounded-2xl shadow-2xl ">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAgIABAMGBAQEBgMAAAABAgADBBEFEiExE0FRBiIyYXGBFEKRoQdSsdFiweHwFSMzcnPxFiRT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACIRAAMAAgIDAQEBAQEAAAAAAAABAgMREiEEEzFBIjIUBf/aAAwDAQACEQMRAD8A8OhCExghCExghCEYAsURsWEw6OBjIojIBKDHgyEGPBjpiNEqmSKZCDHqZVMm0WFaTI0qqZKplZZGkXEbrLCNqUUfUsVtvpLzRC5LqPLNPM3Rfv8AKVKV0OZiVX1Hn9Jex8e7IqVw1VGN101jEBvI9ACx/Tzlps5qgmVlT4m38lkgvH5UUfXrK9+LbigMxSytj7tlTcyn5b7/AGOoxGJ7CUVkHjLnjv8Aza+gklBvvsCId+ux0H1lP3h3P7zovZ/BvycN/wAHVYbfjd6rEV9BtBRzHQ31P27Q3ekL6zPtwr1VmsFJABJAOidTOZ626dVJPn1H6zocuvJx1yaMty9tKujMfPTMAf01OUZunU6iK9oeYFuBXuPv5GVXMl8VkOtgg+R7GMsUOpasnY7r5j/SK2XmSq5+/wApBZJn6DXXfnKzmRpnTCI3kRj36xhkGXQ1gJEwkrdpE0nSKSUoQhOE6ghCExghCEJgiiJCEAscI2KIyMPBigxkUGNsXRKDHAyIGPBjpiNEqmSq0gUx6mVTJtFlG9Zbo0Nu591fTv8AQSlTtmCjuTLFjjYrX4U6A+vzlpZKpLRsNvU6HoB+WdS2DemFjX6vWoV0cweohU2g1okaPUtvXm045RzqV7b6Ttcj2zz83hf4K3FwgvLWrNyMxYIdr0J1+36dNU2/w58kv8K3KxwL+fmKlAFPTlLc4I18+Xn+xlHar8ZAMZk8Rvywod1WpT7ukCKPoFHf9/rI6lB7kKD5v1Y/bylVRPgTi5N6A5jNXh/Hm4fWq1XZOO/UE1hDzAnY3zDyMxBcgrHM9r9SDptD9NRwsQc23uBXuQ/+kLe1oRya2bxc5asFss57Nm2yzXOxJJPbp5zJsUdfSJy86L1rZu5GuVv27/eMLsm+vMo7gj3h9YN6GUkFmx9JFzshDIdEHoZo42P+LuRFPunq/UDS+Z2e2hJczh6V2MMfAa3TBHXxSWQnqN66EHuGHQjr07RKookjFv5bENiEDXdRKlnfrNnLTGprtKIVyKnVbVVyV029jZ7np3mPevI2u4I2D6iSplpRCTI2PWKxjGkmyyQEmRsI4mNJk6KIpwhCcZ0BCEJjBCEJjBCEITBFiQhQB24sbFBjGHAx4MjEeIyYrRKDqKDqMBig7jpiNFlHKaI7+RElrkChnKqiszHsFGyZtVcLFKFs42bUhfBxgLLN9ySPIAa39ZeWSpEFC7k5fuu9Io668/lJ8vBOHQuTWTZiXAGq3Xr5HXYyvhh2U2EaCnp829fsJdMiyyGFOjboN5a/J8h8/nHpU7qXuIrVDsEn4hExqUZLMiw81KfFW0hxkvz8miisE87hKaye2zoCP8IvtFvxsKtXVUNg2CGM0cXO4IcfwMzBs8Qj3rEOzO3yLuHewFdODw7CqzeMNUHuybh8G/Ien/aNephg+1GJ7T218M9qeG43LeeWrJqHKUYnQ15j67i86a5JdEaUb4t9nGXcGoyUbK4FkreAAFof4xMh2Lf8phy3odFiPh+vyl72j4bl+y/tDk41VzLZSd12qNcyEdDr6fuDG31UZ/CVz8QGu2g6yAzczOfMmPva2FJz9ZJ7M8XxuC8TtyM7GN1b0tUyLo8rHWm6+XTcX2n4xh8U4k+Vj0ZOPUUULUlgUAhQp7D5fpMWwl6zYm9a0Q38v+kiRuerX8o1J6WzoU/o7Nz67cQ0LU3OWUta7bYgb0P3mWx35k67Sa0dZAwk6KyRHvGNJCIwjykmUQ3RPlIyY89PMxhERlEVYQhOQuEIQmMEIQmMEIQmMEIQhALCEIxh0cI0RwjIA7fSOHlGekUHrHFZqcMy0orurNz472gct6JzEa661/adN7Ingtf4o5vFFDtbUwdmNJIBO9eZ77156E4lDppZqJ33lYrTJUtnR8WyMLH/AOI14VrXrk3bUCvlRFDE7/xHr6dJRp5K8WthYylgSd9u+v6CVrgTSD5eklUsuJUycvw/m7D3jLzX9EXPWjQ4geXBopDK3OeYsB1nRfw94NlcQ4vXdiGkfhCLWNxIHfoOk5fNU+HiOrDTDXTynpX8JTyZGb/4l/rLW/4bRyv6ka/GfYviPFuJ359uXh1vbrarzkDQ16SpT/DrPS2txnYp5GDD3WHUHY8p3OXZZ+CvNFgS3w25GI6A66GUvZTKycrgtN2bf41lmzzaG9ehkFnyrH0+gPBieTTT2cN/FHg/ETYnGMsY3IUXHIpLdNEkE7HnucL7M3eDxZ8Y8oTJrZTzjYBA2D/WevfxPIb2Y0f/AN11PF+G1C7jda85RQrEsDrXT++pXE940zUtU5InqUXXYz2FuRmXp563/aVcUgbXy+cuN72XfyMGTmb3t9SOsj4TQl9trX8/JXU1nKnc6Ez+nRPwp3dWOhKwG3E6irBXJxVtqxsVefn8KqwO7Wcu9+/0C9tDY6mYuRXjWYwy6EevVorKFuYdid77+URrbGT60VCokNi9OknMisPTQmpLQZb2VjGakxWM5ZztFkyjCEJxHSEIQmMEIQmMKIaMBJQvu7jqdg2QxY/ljNQaMEUCEeohSMN1HCO1EEdITYpgIHrAQmHjyMs1gghugBldRs61LNCeIjs1iIqEDb77neu30lJEZb+KkqNyTCRLKGT3i6de/cH/AGJJj4gNfiG+sVk65tNr+ktLiHHStw6WKWYLy7660SDsf4hOmFt7IXWkWsOr8ZgNiOyrbWeapAO86/8AhrxHHxczLryrUpc1gDxDygkHqJx1RKWizGb39b5/T5TSqpxc2kGqzwshR1LfnPrOrhudHDdca2ewvxLh19L1WZlPI6lW1broYnDcjhHDsdcfFyqUqBJAN3Nrf1M8bsxM6g6NJYeq9RCujOu14eO3KfMyf/LOtbFfkPe9I9D/AIkcVwreApRVlU2WtcDyo/MdDz6TzfErPDcO7NsIW+73K0de49f8/tL4wacQG3iNisy9qlPQzMzGOSUFjE0p0q3+USixKJ4oCyc62ZfIEpbmXT7109f/AFJuF2pjWh7ATU20dfVSNH9otiENtNjY0u+/1kNnuAKB2k3J1ppndcE9rF4Ng4PDzw7LyvBDcj0svJcCeh/385wWUVoprw0K2GsFrGU9C58h9B5/Mxnj311tXXbYtbfEqsQDIda8tReJkkhhEj5fOSts943WwZmh0yFhGESQgxNSTRRMyoQhPMO0IQhMYIQhCAUGSc/TW5HFEKbMx+42GoRmAI4GNigbmTMO5twgFjwsZC7Ggbigaju0cq8xjaFbHVMUII1sHpLSqhrsHMEWxkdebt05tj95CMdtdO8cnT3LB0P7SnFoR0jo8MAcI8Lw6NEa8fpzDrvfbcm5azjVViwFgzHantvl1/QzHwq351rHMzN2ABO/pOq4TwvGxnaz2hOVh0qu66zXyNafQb9J3Q5ids46mrrUmamwSBrbfED2f+xky1KxALBCvXRli6zh9l2uH2MUP5LCCR9/OWsbC51+PoRsryF9D5zox1NTyXw5c03FcaXZWquy0rISyzTH12P3jmtyzW1YssVAOnL0195YfFKaAAK9wVJ0RGjHbYAQkk6ALHrLcTj5ooFdlXZtkjRG9k/WMYdOQjQ78o/zncV+yOK2IOfOZbj8XIF5QfT1P6yhf7M5OCUK0LmodksvyG+UL5k9vv29Y+yPh1evIlvRyDqBsnXMe5lSxdnpOr4lUtSulmPiMvIGRkQKT26aHUDr9ekwczGWu8JXvqoJVviQ+ja8/wDfTtCkmFW0Zox/EPoB1J+UjvQlu2h5fSanhhVK+Z7yvbVGeHoZZezMNZ3E5JaZdHrECgntJ+tF+ZV8L5RPClzkEPDHrN6Ub2HKwhCfPHrhCEWYwRYkWHQAiiEBGQB4iEQ3CMATUco6wjhMjNjwI4CNECZT8JiecsYw2ZVklTms78oYpJ9gpbRqUrszU4TRw+viCX8WTnxq1LFOwc+W5hplga1NGi8WL72tfOejPDJPH9OR8sdcjqMb2gwPx6X4eJjY7oSK2pXRAMT2irt4nQbLLzkpvYO/fQzkcmhG3ZU3huOxHYxMHjGXh3qLmPID1nm5sdw/6PTw5otblaIsS9sPK1Y22VvdJnT5ntXnVYlaYwFeNsbK+vz+czuPnF4phfjMasJkJ1s5enOvzHqPWZfDLxZRbiXHQs6b/pJK3r6O5l1ya7O24FxL/iGN4b6FqE9vzA+c0CpRgw7g7nmnDc7J4XxOtgf+m/vK3Y/L6T2TCq4Zxrh6ZmBY9PMOqMeYK3mJ7Hh+ZNTwv6fN/wDo+DcZHlxfCGjOZ99dE9wTJWz8ms81NxBOtL5bgfZnibAulIavyfnABlS/h/EsT3nx2YL/AC6P9I948b/yw4PJyaSySy7mVNm44F/KjnqXrUKwP1E5fN9nczHYtjr46eq/F9xNWrNyLLBWtNpsboF5T1nQYWM1IV8onxD5cw6fLUkslYvh2eqMq2ecXU20MRfU9Z7e+upUvbQnrGdXTk0lbEVxrsQOs4zjXs9SwL4ZNTfynqv79pWfNT6ZJ+E09pnF2N1MjDx+ZjX4tvJkKVHkdbBlbmg9qfaG9eumT88OeV+aBeb2h4GBCEJ4J6wRREiiEARdxIsJhYQhqEAoigxNRyiFIDCOENRdRtC7FEcBuMHeSoI8oVicsXkkmoupTihORFrRktbcsQrBRMlr4ZvaJjaz9I4U+KNERKV6zRxkE68eP2dM57vh8M+s3Yb768h/TUgtArfmrPu9xruJv3Uq1XKQDMmzh+v+nYSPRpz5/CqXuS+HzJpaor5p/EAXdnPQ/adH/D/jv4DMfHvLeA/cehnLvTbSxBH38pGA4POpKt8pxp3jZ10pyLR9P4udTxLCV8K/nRdAqo6r9ZWcEb69Z4p7E+0+Rw7O5XtYIwII30nfY3tclqttuV/Izqx5U/px5fHa/wAnVYz7x290k1tvp3lFlV22D+8ThnF6clBfoAj3WA85b/8Ap3kstnKfkRv9I9UhJmkVmVVHWZmaV5Tqa92NWQP+Y59OomdlY6gN3P3kqovM/pyPFlR0KugYa6bnFXALayqNaPadzxflr2NdJxWca/xAdWAO9HfnBFtUhskJrZBqN1JSOsTU7Gji2c/CEJ5J6YRREizAARfOJ5xYTCxREhCAduOWMEdGQGSCEaDDcbYmh0epEjBjhGT0Bk4O44SJTHhpVMm0POtRFEQHceojLsVktXQy5U/L2lRZKDqdWN8SFrZcNxKyJjIueIXlHk2TUaHb30PaRviVWdTsH1EcDJq4jlX0xlTn4ZNuPbiuGJ6flZYLn30n4mm4UVlKsAVPlKV3Dajs1sV+XcTky+FS7hnXi8xPqjW4X7Uti41dO/qZvYXtRXsFnGzPO78OyoEkAj1WVwzr1VjOV8pemdSc18PYv/kdbr0YfYyNuNc6kc4M8lTPyEPRzLNfGL1PUkwczcTtOK5RtBOx+s4fiD81zFW+0lu4szrrrM1rC779YrexjWxLvEqVW+IdDJjMylyrhh5TRRg67E7sGXkuL+nDmxce0YEIQnnnYEUwhMYPOLCEJhYCEIQDxCEIUAIvlCEIBwjhCEcUcIohCMvgpIklWEJeCVEix24QlUSDcWEJv0DHCSoYQlJEokDGISYQlvpMeqg95Rz8arwvFVeVuvbtCE586Tx7ZbA3z0ZPeJqEJ5J6g1owdxCEUJZSWqHKjQMISkiUf//Z"
              alt="Secure Protection"
              className="w-full h-auto object-cover rounded-lg opacity-90"
            />
          </div>
        </div>
        
      </div>
      <div className="absolute bottom-4 w-full flex justify-center">
        <p className="text-lg font-semibold text-white rotate-text">
          SecurePass: Your Ultimate Solution for Secure Password Management
        </p>
      </div>
     
    </div>
 <Services></Services>
 <AboutUs></AboutUs>
 <Contact></Contact>
</>
  );
};

export default Home;
