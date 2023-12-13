import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: "../src/assets/blog01.png",
    },
    {
      id: 2,
      title:
        "How can you manage them?",
      image: "../src/assets/blog02.png",
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: "../src/assets/blog03.png"
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
          Caring is the new marketing
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>
      {/*  all blogs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <img src={blog.image} alt="" />
            <div className=" px-4 py-8">
              <h3>{blog.title}</h3>
              <div className="flex items-center gap-6">
                <a
                  href="/"
                  className="font-bold text-brandPrimary hover:text-neutral-700"
                >
                 Readmore
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
