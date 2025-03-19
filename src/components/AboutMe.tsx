'use client'
import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";


export const AboutMe = () => {
    const isDesktopOrLaptop  = useMediaQuery("(min-width: 1224px)");
    return (    

    <Card className="mb-6">
        <CardHeader className="flex flex-row justify-between items-baseline">
            <CardTitle>About Me</CardTitle>
            {isDesktopOrLaptop && <ThemeSwitcher />}
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">
                {/* Write 1-2 sentences about yourself */}
                I am a software engineer with a passion for building scalable and efficient web applications with over six years of experience building web and mobile applications in JavaScript and TypeScript. I specialize in developing intuitive user interfaces, optimizing application performance, and collaborating with cross-functional teams to deliver scalable solutions.                
            </p>
        </CardContent>
    </Card>
    )
}