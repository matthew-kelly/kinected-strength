import Image from "next/image";
import { useRouter } from "next/router";
import LogoSpinner from "../../components/LogoSpinner";
import { KLogo } from "../../components/shapes";
import bannerImg from "../../public/temp/tempbanner-horiz.jpg"; // FIXME: get from blog post

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <div className="bg-primary-dark flex flex-col relative pt-32"></div>

      <article className="flex flex-col bg-light-gray lg:p-24 md:p-16 p-6 lg:mx-24 md:mx-8 mx-4 text-primary-dark relative">
        <div className="md:block hidden absolute top-0 right-0">
          <LogoSpinner size="125" />
        </div>
        <h1 className="mb-4 md:text-5xl text-4xl mr-12">
          This is the title of a blog post
        </h1>
        <div className="flex justify-between border-b-primary-dark border-b-2 md:mb-16 mb-8 md:text-base text-sm">
          <span>Author Name</span>
          <span>December 1, 2022</span>
        </div>

        <div className="prose prose-headings:mb-4 prose-headings:text-primary-dark lg:ml-12">
          <Image
            layout="responsive"
            src={bannerImg}
            alt="// FIXME: real alt text"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eum
            sit ex ipsum ab dolor architecto dicta vitae nemo cumque deserunt
            dolorem officiis consequatur impedit, rem debitis sed vero?
            Laudantium.
          </p>
          <h2>This is a subheading</h2>
          <p>
            Obcaecati incidunt ipsum omnis adipisci voluptas commodi tempore
            mollitia iste praesentium. Inventore ipsa nam, reiciendis incidunt
            perspiciatis natus{" "}
            <a href="#">minima harum non neque perferendis</a> alias fugiat in
            eligendi aspernatur, iusto autem?
          </p>
          <p>
            Quidem assumenda aspernatur id voluptatibus placeat aliquam at.
            Recusandae reprehenderit nihil ex ad rem quaerat est autem numquam
            iusto labore? Accusamus sit sequi architecto veniam odio dicta
            eligendi vitae incidunt!
          </p>
          <h2>Another subheading</h2>
          <h3>With a h3 under it</h3>
          <p>
            Hic, voluptas commodi minima corporis inventore vitae expedita iusto
            porro minus vel nostrum veniam nulla illo? Pariatur quaerat dolor
            porro harum eligendi a unde eius, deleniti illum exercitationem,
            alias eaque.
          </p>
        </div>
        <div className="self-center md:mt-16 mt-8">
          <KLogo
            width="75"
            colorRect="fill-secondary-light"
            colorTop="fill-primary-light"
            colorBottom="fill-secondary-dark"
          />
        </div>
      </article>
    </>
  );
}
