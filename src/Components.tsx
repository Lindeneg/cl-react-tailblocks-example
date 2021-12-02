import React, { useContext } from "react";
import * as TailBlock from "cl-react-tailblocks";

export function Header() {
  const cxt = useContext(TailBlock.ThemeContext);
  return (
    <TailBlock.Header
      buttonText="Switch Theme"
      links={[
        {
          label: "First Link",
        },
        {
          label: "Second Link",
        },
        {
          label: "Third Link",
        },
        {
          label: "Fourth Link",
        },
      ]}
      name="Tailblocks"
      onClick={() => {
        cxt?.setContext && cxt.setContext();
      }}
      orientation="right"
    />
  );
}

export function Hero() {
  return (
    <TailBlock.Hero
      btnLeft={{
        buttonText: "Button",
        onClick: () => {},
      }}
      btnRight={{
        buttonText: "Button",
        onClick: () => {},
      }}
      description="Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork."
      orientation="right"
      imgNode={(cls) => (
        <img
          width={720}
          height={600}
          className={cls}
          alt="dummy"
          src="https://dummyimage.com/720x600"
        />
      )}
      title="Microdosing synth tattooed vexillologist"
    />
  );
}

export function Feature() {
  return (
    <TailBlock.FeatureIconCardItemsWithHeader
      data={[
        {
          description:
            "Taxidermy gastropub indxgo juice poutin. Ramps blue bottle crucifix vinyl post-ironic four dollar toast VHS try-hard vegan t microdosing banh mi pug.",
          icon: "graph",
          onClick: () => {},
          title: "Shooting Stars",
        },
        {
          description:
            "Gastropub indxgo juice poutine, ramps blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Microdosing banh mi pug VHS try-hard.",
          icon: "scissor",
          onClick: () => {},
          title: "The Catalyzer",
        },
        {
          description:
            "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Microdosing banh mi pug VHS try-hard gastropub indxgo juice poutine ramps.",
          icon: "person",
          onClick: () => {},
          title: "Neptune",
        },
      ]}
      label="ROOF PARTY POLAROID"
      title="Master Cleanse Reliac Heirloom"
    />
  );
}

export function Pricing() {
  return (
    <TailBlock.PricingDynamic
      data={[
        {
          bottomText:
            "Literally you probably haven't heard of them jean shorts.",
          features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric",
          ],
          label: "START",
          onClick: () => {},
          prices: {
            price: "Free",
          },
        },
        {
          bottomText:
            "Literally you probably haven't heard of them jean shorts.",
          comparisons: ["", "$456"],
          features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric",
            "Vexillologist pitchfork",
          ],
          label: "PRO",
          onClick: () => {},
          prices: [
            {
              per: "/month",
              price: "$38",
            },
            {
              per: "/year",
              price: "$400",
            },
          ],
        },
        {
          bottomText:
            "Literally you probably haven't heard of them jean shorts.",
          comparisons: ["", "$672"],
          features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric",
            "Vexillologist pitchfork",
            "Vexillologist pitchfork",
          ],
          label: "BUSINESS",
          onClick: () => {},
          prices: [
            {
              per: "/month",
              price: "$56",
            },
            {
              per: "/year",
              price: "$600",
            },
          ],
        },
        {
          bottomText:
            "Literally you probably haven't heard of them jean shorts.",
          comparisons: ["", "$864"],
          features: [
            "Vexillologist pitchfork",
            "Tumeric plaid portland",
            "Mixtape chillwave tumeric",
            "Vexillologist pitchfork",
            "Vexillologist pitchfork",
            "Vexillologist pitchfork",
          ],
          label: "SPECIAL",
          onClick: () => {},
          prices: [
            {
              per: "/month",
              price: "$72",
            },
            {
              per: "/year",
              price: "$750",
            },
          ],
        },
      ]}
      description="Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical."
      options={["Monthly", "Annually"]}
      selectedCardLabel="pro"
      title="Pricing"
    />
  );
}

export function Footer() {
  return (
    <div>
      <TailBlock.Footer
        credit={{
          aProps: {
            href: "https://github.com/lindeneg",
            rel: "no-referrer",
            target: "_blank",
          },
          label: "@lindeneg",
          year: "2021",
        }}
        name="Tailblocks"
        socials={{
          facebook: "https://facebook.com",
          instagram: "https://instagram.com",
          linkedIn: "https://linkedin.com",
          twitter: "https://twitter.com",
        }}
      />
    </div>
  );
}
