<nav className="   h-[70px] md:text-xs lg:text-base flex justify-center fixed z-50 bg-white-10 w-full shadow-lg">
  <div className="animate__animated animate__slideInDown  flex flex-between px-5 lg:px-16 w-full">
    <Link href={"/"}>
      <Image
        src={logo}
        width={200}
        height={50}
        alt="leumax log"
        className=" w-[100px] lg:w-[150px]"
      />
    </Link>

    <button
      onClick={() => handleOpen(!isOpen)}
      className=" flex flex-col items-center gap-y-2 w-[30px] cursor-pointer md:hidden"
    >
      <span className=" w-full font-bold bg-black-10 h-[2px]"></span>
      <span className=" w-full font-bold bg-black-10 h-[2px]"></span>
      <span className=" w-full font-bold bg-black-10 h-[2px]"></span>
    </button>

    <ul className="hidden md:flex-between gap-4 font-medium">
      <li>
        <Link
          href={"/"}
          className={
            linkActive == "/"
              ? " text-orange-10"
              : " hover:text-orange-10 transition-all"
          }
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/services"}
          className={
            linkActive == "/services"
              ? " text-orange-10"
              : " hover:text-orange-10 transition-all"
          }
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href={"/programs"}
          className={
            linkActive == "/programs"
              ? " text-orange-10"
              : " hover:text-orange-10 transition-all"
          }
        >
          Programs
        </Link>
      </li>
      <li>
        <Link
          href={"/about"}
          className={
            linkActive == "/about"
              ? " text-orange-10"
              : " hover:text-orange-10 transition-all"
          }
        >
          About Us
        </Link>
      </li>
      <li>
        <Link
          href={"/iot"}
          className={
            linkActive == "/iot"
              ? " text-orange-10"
              : " hover:text-orange-10 transition-all"
          }
        >
          IoT
        </Link>
      </li>
      <li>
        <Link
          href={"/products"}
          className={
            linkActive == "/products"
              ? " text-orange-10"
              : " hover:text-orange-10 transition-all"
          }
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href={"/academy"}
          // || '/academy/tech4japa' || '/academy/tech2jobs' || '/academy/corps2tech' || '/academy/tech2kids'
          className={
            linkActive == "/academy"
              ? " text-orange-10"
              : " hover:text-orange-10 transition-all"
          }
        >
          Academy
        </Link>
      </li>
    </ul>

    <Link href={"/contact"} className="hidden md:block">
      <Button
        type={"button"}
        title={"Contact us"}
        variant={" btn-orange text-xs lg:text-base"}
      />
    </Link>
  </div>

  <ul
    className={` ${
      isOpen ? " flex" : " hidden"
    } absolute top-[70px] bg-white-10 w-full left-0  flex-col items-center z-50 md:hidden`}
  >
    <li className=" border-b border-gray-10 w-full text-center">
      <Link
        className=" py-3 block hover:text-orange-10 transition-all"
        href={"/"}
        onClick={() => handleOpen(!isOpen)}
      >
        Home
      </Link>
    </li>
    <li className=" border-b border-gray-10 w-full text-center">
      <Link
        className=" py-3 block hover:text-orange-10 transition-all"
        href={"/services"}
        onClick={() => handleOpen(!isOpen)}
      >
        Services
      </Link>
    </li>
    <li className=" border-b border-gray-10 w-full text-center">
      <Link
        className=" py-3 block hover:text-orange-10 transition-all"
        href={"/programs"}
        onClick={() => handleOpen(!isOpen)}
      >
        Programs
      </Link>
    </li>
    <li className=" border-b border-gray-10 w-full text-center">
      <Link
        className=" py-3 block hover:text-orange-10 transition-all"
        href={"/about"}
        onClick={() => handleOpen(!isOpen)}
      >
        About Us
      </Link>
    </li>
    <li className=" border-b border-gray-10 w-full text-center">
      <Link
        className=" py-3 block hover:text-orange-10 transition-all"
        href={"/iot"}
        onClick={() => handleOpen(!isOpen)}
      >
        IoT
      </Link>
    </li>
    <li className=" border-b border-gray-10 w-full text-center">
      <Link
        className=" py-3 block hover:text-orange-10 transition-all"
        href={"/products"}
        onClick={() => handleOpen(!isOpen)}
      >
        Products
      </Link>
    </li>
    <li className=" border-b border-gray-10 w-full text-center">
      <Link
        className=" py-3 block hover:text-orange-10 transition-all"
        href={"/academy"}
        onClick={() => handleOpen(!isOpen)}
      >
        Academy
      </Link>
    </li>
    <li className=" border-b border-gray-10 w-full text-center">
      <Link
        className=" py-3 block"
        href={"/contact"}
        onClick={() => handleOpen(!isOpen)}
      >
        <Button type={"button"} title={"Contact us"} variant={" btn-orange"} />
      </Link>
    </li>
  </ul>
</nav>;
