import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BlogList from "../components/BlogList";

function Home() {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "mario",
      id: uuidv4(),
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "yoshi",
      id: uuidv4(),
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: uuidv4(),
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log(blogs);
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title={"mario's Blogs"}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Home;
