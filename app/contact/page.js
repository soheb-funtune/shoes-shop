import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div class="container mx-auto py-12">
      <div class="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
        <Image
          src="/soheb.jpg"
          alt="Your Image"
          width={100}
          height={200}
          class="w-[200px] h-[250px] rounded-sm  mx-auto mb-4"
        />
        <h1 class="text-2xl text-gray-800 font-semibold text-center">
          Contact Me
        </h1>
        <div class="my-4">
          <p class="text-gray-600 text-center">
            Feel free to get in touch with me using the following methods:
          </p>
        </div>
        <div class="my-4 text-center">
          <a
            href="mailto:sohebs5050@gmail.com"
            class="text-blue-500 hover:underline"
          >
            sohebs5050@gmail.com
          </a>
        </div>
        <div class="my-4 text-center">
          <ul class="flex justify-center space-x-4">
            <li>
              <a
                href="https://github.com/soheb-funtune"
                target="_blank"
                class="text-blue-500 hover:underline"
              >
                Github
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.twitter.com/yourprofile"
                target="_blank"
                class="text-blue-500 hover:underline"
              >
                Twitter
              </a>
            </li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/soheb-sayyad-a31730225/"
                target="_blank"
                class="text-blue-500 hover:underline"
              >
                Linkdin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
