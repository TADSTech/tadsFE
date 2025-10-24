"use client"
import {Header} from '../../components/sections/Header';
import {Hero} from '../../components/sections/Hero';


export default function MainPage() {
    
    return (
        <div>
            <Header />
            <Hero />
            <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-background">
                <h1 className="font-header text-5xl mb-8">Main Content</h1>
                <button className="mb-8 px-6 py-3 bg-secondary text-secondary-foreground rounded-full" onClick={() => alert("Button clicked!")}>Click Me</button>
                <p className="max-w-2xl text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.</p>
            </section>
            <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-card">
                <h2 className="font-header text-3xl mb-4">About Section</h2>
                <p className="max-w-xl text-base mb-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </section>
            <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-background">
                <h2 className="font-header text-3xl mb-4">Projects Section</h2>
                <p className="max-w-xl text-base mb-8">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            </section>
            <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-card">
                <h2 className="font-header text-3xl mb-4">Contact Section</h2>
                <p className="max-w-xl text-base mb-8">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </section>
        </div>
    );
}
