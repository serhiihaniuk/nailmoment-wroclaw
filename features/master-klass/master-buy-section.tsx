import { BuyTicketButton } from "@/blocks/ui/buy-ticket";
import { Section } from "@/blocks/ui/section";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ListItem } from "@/components/ui/list-item";

export const MasterBuySection = () => {
  return (
    <Section>
      <div className="flex flex-col gap-6">
        <Card>
          <CardContent>
            <CardHeader>
              <CardTitle className="text-xl text-blue-foreground">
                Це ідеальна можливість:
              </CardTitle>
            </CardHeader>
            <CardDescription>
              <ul>
                <ListItem text={"для новачків — закрити технічні “пробіли”"} />
                <ListItem
                  text={"для досвідчених — знайти нові підходи й матеріали"}
                />
                <ListItem
                  text={"для всіх — отримати реальні відповіді від практиків"}
                />
              </ul>
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-4 text-blue-foreground">
            <CardHeader>
              <CardTitle className="text-xl text-blue-foreground">
                Як купити квиток?
              </CardTitle>
            </CardHeader>
            <CardDescription className="flex flex-col gap-4 px-6">
              <p>
                Участь у майстер-класах у МАЛОМУ ЗАЛІ{" "}
                <span className="font-bold">
                  доступна для всіх гостей фестивалю Nail Moment
                </span>{" "}
                — достатньо мати квиток на фестиваль.
              </p>
              <p>
                А якщо ви хочете відвідати лише Малий зал та Nail-Маркет — для
                цього є спеціальний квиток{" "}
                <span className="font-bold">GUEST.</span>
                <br /> Він дає доступ до всіх майстер-класів у МАЛОМУ ЗАЛІ з
                10:00 до 14:00 та до великої зони Nail-Маркету зі знижками,
                новинками та подарунками від брендів
              </p>
            </CardDescription>
            <CardFooter className="flex justify-end pt-4">
              <CardAction>
                <BuyTicketButton />
              </CardAction>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
