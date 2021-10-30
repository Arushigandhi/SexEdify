import React from "react";
import styles from "./Container.module.css";
import { useParams } from "react-router";

function Container() {
  const { module_id } = useParams();

  function content() {
    if (module_id === "rights_over_body") {
      return "We all have the right to make decisions about our own health, body, sexuality and reproductive life, without fear, coercion, violence or discrimination. Body ownership is something that kids must understand at a very tender age because unfortunately in our society, exploitation begins at an age when people do not have the mental / physical maturity to fight it. For this reason, kids must be taught about who has rights over their body. The ultimate right ALWAYS lies in the hands of the individuals themselves. Nobody understands what is comfortable for them and what is painful for their body except for themselves of course. However, since when you are a child, you won’t know what to do with your body, we trust it with our parents or any other close relative. Even if something of what they do is hurtful or uncomfortable you have the right to say ‘NO’. This also includes any kind of physical hurt by any parent in the name of concern – that is completely unacceptable. Anybody apart from yourself, your parents/guardians and your close relatives are strangers to your body. They CANNOT touch your body, pass comments about it or do something to it without your/your parent’s consent. We might assume a lot of people are close enough to us to exercise that right. However, we must draw a line between body ownership to the closeness of relationship any person enjoys with you. No amount of closeness gives one the right to use/hurt your body. More often than not there are cases of improper touches (more details on what a bad touch is, is available on the next page) in schools by teachers, peers and janitors. Always remember that a well-wisher would never make you feel uncomfortable and if they do, they aren’t your well-wishers.";
    }
    if (module_id === "identify_bad_touch") {
      return `Today, child molestation and physical abuse are so very rampant. Every other day we get to hear stories about a child being molested or touched inappropriately. What’s more, children who fall prey to this are normally below six years of age. They are too young and innocent to know the difference between right and wrong because the abuser is generally someone known to them and the family.
            Therefore, while it is a terrible subject to talk about, this module is going to help you understand the difference between good touch and bad touch.
            Good touch: A touch that makes you feel secure, cared for and happy. For example, a mother hugging a child or a grandparent kissing their child or a doctor examining a child. Any touch that makes the you happy or secure is a good touch.
            Bad touch: A touch that makes you uncomfortable, afraid or nervous is a bad touch. The child will not feel safe with a bad touch. For example, if an adult touches your child and tells him or her not to tell anyone, or if your child feels very uncomfortable when kissed or touched, then it’s a bad touch.
            Children must know that no one is ever allowed to touch their private parts, and that it is important to keep these areas covered and safe in public spaces (which includes school too). It is also important to teach children about respect for ‘body space’. We must assume we are always wearing an invisible swim suit and beneath this, whatever lies, is our territory
            If someone does something to you and asks you not to talk about it or tell anyone, then it most likely is going to be a bad touch because they are aware of the fact that if someone mature gets to know, they would get into trouble for manhandling or exploiting you.       `;
    }
    if (module_id === "react_to_bad_touch") {
      return `The foremost important reaction to breaching of body ownership by any stranger or known person should be to say NO. Children need to know that it's okay to say no, and when to say no. If a person asks consent for doing something that could possibly make you feel uncomfortable even if it is a person you know, your feelings should be given priority and you must muster your courage to say no on the face. Even after refusal if the person continues to misbehave, the child who is being abused should know how to overcome the fear of his molester, and scream for help. Screaming will get them the attention of the people in the vicinity, and get them help. Children should be made aware of the intensity of danger that comes with such incidents, and the need to run to safety after sounding the alarm. Always run towards an area which is crowded and to a place where you can find help. If you think none of the above measures can be taken, talk to your parents about what happened as they know how to deal with such people better. Tell them everything that happened without feeling shy as your parents won’t judge you or scold you but will feel proud that you opened up to them. You should stop all contacts with a person who has made you feel this way asap.
            `;
    }
    if (module_id === "male_female_anatomy") {
      return `Unfortunately, kids are not educated about what their private parts are and how girls and boys have different private parts. They remain oblivious for a good part of their life and by the time they explore and understand it by themselves, either it is too late or they have understood it all wrong. As kids, according to research almost 70 percent involve in
            Touching private parts at home or in public
            Exposing private parts to others
            Trying to look at others’ private parts
            Standing too close to others
            Touching female breasts
            This is because of their curiosity and sheer lack of misinformation. We will break those shackles and understand the human anatomy of girls and boys.
            Girls:
            The private parts for a girl are her under-arms, her chest area (later to grow into breasts), lower abdominal organs – the vagina and butt. Most of the organs are same as that of boys except for the chest area and their vagina. As kids, till around 10 years girl’s chests appear to be similar to boys – flat and sturdy. Once they hit puberty (explained more in the next section), they start to grow out breasts. Breasts are a cup shaped organ made up of fatty tissues and other glands. This organ in a woman has the special functionality to produce mammary glands (milk) post pregnancy for a woman, so that she can feed her child. Over the years, this organ has been sexualised and misinterpreted by the society. However, it is high time we understand this is just any other organ that serves a very important purpose and is one of a woman’s private parts so to make comments on it, to touch it or talk about it is none of anybody’s business. For that matter, any body part of a woman belongs only to her and there is absolutely no need to sexualise it. Similarly, a woman’s excretory/reproductive organ has been built differently than boys. To know about how the female vaginal anatomy looks, head towards our bot or to the anatomy module.
            Boys:
            The private parts for boys are pretty much the same as girls. Despite the gender, the integrity of one’s own body remains the same. In fact, there have been various cases of sexual abuse among boys as well since it is assumed that boy’s private parts aren’t that important as girls. However, every organ is a part of your body and needs to be taken care of. Boys after hitting their puberty do not grow out breasts. Their chest remains flat (perhaps a little more bulked up). However, their penis grows out in size. The penis is a boy’s lower abdominal frontal organ used for excretion as well as other purposes. To protect their penis as well as induce sex hormones, men also have ball shaped testicles beneath their penis. Now while for kids it has been observed that these organs could be fascinating to play around with, imagine them to be living beings as well. Would you like it if someone kept meddling with you and bothering you? Similarly, respect your own body and give it the space it requires and respect other’s bodies as well. Men and women are bound to be biologically different and that is natural. One should respect these differences and not cross their boundaries.
            `;
    }
    if (module_id === "hitting_puberty") {
      return `Puberty is when a child's body begins to develop and change as they become an adult. Girls develop breasts and start their periods. Boys develop a deeper voice and facial hair will start to appear. The average age for girls to begin puberty is 11, while for boys the average age is 12. But it's different for everyone, so don't worry if you hit puberty earlier or later.
            It's completely normal for puberty to begin at any point from the ages of 8 to 14. The process can take up to 4 years. You can realise that you are going to hit puberty soon if you face these symptoms.
            Girls:
            The first sign of puberty in girls is usually that their breasts begin to develop.
            It's normal for breast buds to sometimes be very tender or for one breast to start to develop several months before the other one.
            Pubic hair also starts to grow, and some girls may notice more hair on their legs and arms.
            After a year or so of puberty beginning, and for the next couple of years:
            girls' breasts continue to grow and become fuller
            around 2 years after beginning puberty, girls usually have their first period
            pubic hair becomes coarser and curlier
            underarm hair begins to grow – some girls also have hair in other parts of their body, such as their top lip, and this is completely normal
            girls start to sweat more
            girls often get acne – a skin condition that shows up as different types of spots, including whiteheads, blackheads and pus-filled spots called pustules
            girls have a white vaginal discharge
            girls go through a growth spurt – from the time their periods start, girls grow 5 to 7.5cm (2 to 3 inches) annually over the next year or two, then reach their adult height
            most girls gain weight (which is normal) as their body shape changes – girls develop more body fat along their upper arms, thighs and upper back; their hips grow rounder and their waist gets narrower
            Boys:
            the first sign of puberty in boys is usually that their testicles get bigger and the scrotum begins to thin and redden
            pubic hair also starts to appear at the base of the penis
            After a year or so of puberty starting, and for the next couple of years:
            the penis and testicles grow and the scrotum gradually becomes darker
            pubic hair becomes thicker and curlier
            underarm hair starts to grow
            boys start to sweat more
            their voice "breaks" and gets permanently deeper – for a while, a boy might find his voice goes very deep one minute and very high the next
            boys often develop acne – a skin condition that shows up as different types of spots, including whiteheads, blackheads and pus-filled spots called pustules
            boys go through a growth spurt and become taller by an average of 7 to 8cms, or around 3 inches a year, and more muscular
            As pre-teens, it is completely normal to go through these changes, slow or fast, more or less than your peers as it is not a competition. It is your body so give it time to naturally grow into what it should. Talk about these changes to a guardian/parent if you feel uncomfortable. It is totally NORMAL to feel different. Hitting puberty just means you are entering a new phase in life – adulthood.
            `;
    }
    if (module_id === "when_puberty") {
      return `As discussed in the previous module, one cam hit puberty at any age between 9 to 14. Within this period, it is completely ok to hit puberty at any time. Do not compare yourself to friends of your age. However, here are some reasons for early/late puberty.
            Puberty is said to be early if it starts before:
            eight years in girls
            nine years in boys.
            Puberty is said to be late if there are no signs of puberty by:
            13 years in girls, or if girls show other signs of puberty but haven’t had their first period by 16 years
            14 years in boys.
            Early puberty
            Causes of early puberty include obesity and family genetics. Rarely, early puberty is caused by hormonal imbalances. But for the majority of children, especially girls, no cause is found.
            Late puberty
            Late puberty is most commonly caused by family genetics. If you or other family members experienced late puberty, it’s more likely that your child will too.
            Late puberty can also be caused by lifestyle and social issues like poor nutrition, eating disorders or severe stress. Chronic illness, hormonal conditions and some genetic disorders can also cause late puberty, but these are less common. 
            Children’s self-esteem and body image can be affected if puberty is early or late. Which is why we are here to tell you that there is absolutely nothing wrong and its all normal. If you want to feel like you need a community to discuss this, head to our discussion portal!
            `;
    }
    // if(module_id=='myths_child_birth'){

    // }
    // if(module_id=='pre_pregnancy'){

    // }
    // if(module_id=='during_pregnancy'){

    // }
    if (module_id === "primary_characteristics") {
      return `Primary sex characteristics refer to changes to the sexual organs themselves (uterus, vagina, penis, and testes).
            Primary sex characteristic changes for boys include the enlargement of the testes, penis, prostate gland, and seminal vesicles. These changes normally begin to occur between the ages of 9 and 14 years. Their growth is generally completed between ages 12 and 16 years.
            The most significant and noticeable puberty-related change for young men is spermarche, or the first ejaculation. Spermarche generally occurs between the ages of 12 and 16. The spermarche indicates a boy is now producing sperm and could fertilize a female egg through sexual activity, resulting in female pregnancy. This first ejaculation often occurs during sleep; it is often referred to as a "wet dream." Young men may also experience spontaneous erections when they're awake. This may occur when they become emotionally stimulated, or for no reason at all.
            The most significant and noticeable primary sex change for young women is menarche, or the first menstrual period. This occurs when the uterus -- the organ that will later carry and nurture a baby -- sheds its first lining of tissue and blood.Menarche alone does not mean that a girl is able to become pregnant. In some cases pregnancy may occur prior to menarche, while in others it may not be possible for months after menarche. For this reason, young women need to be taught that it is possible (even if not common) for them to get pregnant before they have their first period if they should become sexually active.`;
    }
    if (module_id === "secondary_characteristics") {
      return `Secondary characteristics are the result of hormonal changes in the body during puberty. These changes are faster in girls than in boys. Some changes are common in both boys and girls while others are specific to each gender. This is due to the different hormones released by them. Growth of pubic hair, facial hair and under the armpit, increase in height, sweating, etc. are some of the secondary sexual characteristics.
            Change in height: Most prominent change that occurs in adolescents is the change in their heights. Growth hormone secretion and bone growth are much higher during this time.
            Sweat and Sebaceous glands: The pimples and acne in adolescents are mostly due to the increased activities of sweat and sebaceous glands
            Hair growth: Another observable change is rapid hair growth under the armpit and pubic area.
             Changes developed in Boys
            Boys develop the heavier muscular body, wide shoulders, and narrow hips.
            Enlargement of the voice box leads to a much deeper voice.
            Maturation of testis and starts to produce sperms.
            The growth of hairs on the chest.
            Enlargement of Adam’s apple.
            Changes developed in girls
            Rounded hips and breast development.
            Matured ovaries start to release a mature ovum.
            Ovulation and menstruation initiate.
            Mammary gland enlargement.
            Testosterone hormones produced in the testis of males and estrogens released in ovaries of females are responsible for these changes in the males and females respectively.`;
    }
    if (module_id === "sexuality_body_positivity") {
      return `Exploring your sexuality doesn’t just mean trying things with same-sex partners. Exploring your sexuality has to do with figuring out what works for you, including the kind of people you want to have sex with but also how you have sex or the kinds of things you like doing during sex. It can mean having more than one partner or none at all. It can mean trying different things by yourself, it can mean sex toys and it can mean trying different types of porn and erotica! You will also find what you don’t like, and that’s just as important. It’s been said before and it’s worth saying again: you do not need to put yourself in a box or stick a label on yourself if you don’t want to! Be open-minded to the boundless possibilities of being and feeling sexy and remember that it’s about you and your personal preferences. That’s the whole point of this! (No one out here knows what they’re doing anyway.)
            Do you ever wish you could change something about your body? If so, you're not alone. Lots of people feel unhappy with some part of their looks. But when you get stuck on what you don't like, it can really bring down your self-esteem. You don't need a perfect body to have a good body image. When you like your body as it is, right now, you boost your body image. And your self-esteem too. But what if I need to be in better shape? Some people think, "When I get in better shape, I'll like my body. But it's best to start the other way. First, accept your body. Find things to like about it. Take good care of your body. When you like your body, it's easier to treat it right.`;
    } else {
      return "Content Coming Soon!";
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.component}>{content()}</div>
      <a href="/" className={styles.button}>
        Take the Quiz!
      </a>
    </div>
  );
}

export default Container;
