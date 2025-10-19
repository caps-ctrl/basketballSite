import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

export default function InfoCards() {
  return (
    <div className="w-full py-10 bg-white flex flex-col sm:flex-row justify-center items-center gap-8 px-6">
      {/* CARD 1 */}
      <Card className="w-full sm:w-1/3 max-w-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-amber-800">
            Join Our Training
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            Improve your skills with professional basketball coaches and dynamic
            workouts designed for all levels.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6">
            Sign Up
          </Button>
        </CardFooter>
      </Card>

      {/* CARD 2 */}
      <Card className="w-full sm:w-1/3 max-w-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-amber-800">
            Our Offer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            Explore our programs — from beginner to advanced training, team
            sessions, and individual coaching plans.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6">
            Learn More
          </Button>
        </CardFooter>
      </Card>

      {/* CARD 3 */}
      <Card className="w-full sm:w-1/3 max-w-sm shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-amber-800">
            Get to Know Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            Meet our passionate team and discover what drives our love for
            basketball and youth development.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6">
            About Us
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
