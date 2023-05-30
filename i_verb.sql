PGDMP     :                    {           i_verb    15.2    15.2 5    7           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            8           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            9           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            :           1262    16441    i_verb    DATABASE     }   CREATE DATABASE i_verb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Ukrainian_Ukraine.1251';
    DROP DATABASE i_verb;
                postgres    false            �            1259    16486    comment    TABLE     �   CREATE TABLE public.comment (
    id bigint NOT NULL,
    text character varying(300) NOT NULL,
    publish_date date NOT NULL,
    user_id bigint,
    parent_comment_id bigint
);
    DROP TABLE public.comment;
       public         heap    postgres    false            �            1259    16485    comment_id_seq    SEQUENCE     w   CREATE SEQUENCE public.comment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.comment_id_seq;
       public          postgres    false    221            ;           0    0    comment_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.comment_id_seq OWNED BY public.comment.id;
          public          postgres    false    220            �            1259    16465    exercise    TABLE     �   CREATE TABLE public.exercise (
    id bigint NOT NULL,
    rating real DEFAULT 0 NOT NULL,
    name character varying(100) NOT NULL
);
    DROP TABLE public.exercise;
       public         heap    postgres    false            �            1259    16464    exercise_id_seq    SEQUENCE     x   CREATE SEQUENCE public.exercise_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.exercise_id_seq;
       public          postgres    false    217            <           0    0    exercise_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.exercise_id_seq OWNED BY public.exercise.id;
          public          postgres    false    216            �            1259    16472    parent_comment    TABLE     W   CREATE TABLE public.parent_comment (
    id bigint NOT NULL,
    exercise_id bigint
);
 "   DROP TABLE public.parent_comment;
       public         heap    postgres    false            �            1259    16471    parent_comment_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.parent_comment_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.parent_comment_id_seq;
       public          postgres    false    219            =           0    0    parent_comment_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.parent_comment_id_seq OWNED BY public.parent_comment.id;
          public          postgres    false    218            �            1259    16510    table_verb_item    TABLE     �   CREATE TABLE public.table_verb_item (
    id bigint NOT NULL,
    translate character varying(100) NOT NULL,
    color_rarity character varying(100) NOT NULL
);
 #   DROP TABLE public.table_verb_item;
       public         heap    postgres    false            �            1259    16509    table_verb_item_id_seq    SEQUENCE        CREATE SEQUENCE public.table_verb_item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.table_verb_item_id_seq;
       public          postgres    false    223            >           0    0    table_verb_item_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.table_verb_item_id_seq OWNED BY public.table_verb_item.id;
          public          postgres    false    222            �            1259    16454    user    TABLE     �   CREATE TABLE public."user" (
    id bigint NOT NULL,
    login character varying(30) NOT NULL,
    email character varying(100) NOT NULL,
    role character varying(30) NOT NULL,
    password character varying(100) NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    16453    user_id_seq    SEQUENCE     t   CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    215            ?           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    214            �            1259    16517    verb    TABLE       CREATE TABLE public.verb (
    id bigint NOT NULL,
    name character varying(100) NOT NULL,
    transcription character varying(100) NOT NULL,
    form character varying(30) NOT NULL,
    sound_path character varying(100),
    table_verb_item_id bigint
);
    DROP TABLE public.verb;
       public         heap    postgres    false            �            1259    16516    verb_id_seq    SEQUENCE     t   CREATE SEQUENCE public.verb_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.verb_id_seq;
       public          postgres    false    225            @           0    0    verb_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.verb_id_seq OWNED BY public.verb.id;
          public          postgres    false    224            �           2604    16489 
   comment id    DEFAULT     h   ALTER TABLE ONLY public.comment ALTER COLUMN id SET DEFAULT nextval('public.comment_id_seq'::regclass);
 9   ALTER TABLE public.comment ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221                       2604    16468    exercise id    DEFAULT     j   ALTER TABLE ONLY public.exercise ALTER COLUMN id SET DEFAULT nextval('public.exercise_id_seq'::regclass);
 :   ALTER TABLE public.exercise ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    16475    parent_comment id    DEFAULT     v   ALTER TABLE ONLY public.parent_comment ALTER COLUMN id SET DEFAULT nextval('public.parent_comment_id_seq'::regclass);
 @   ALTER TABLE public.parent_comment ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    16513    table_verb_item id    DEFAULT     x   ALTER TABLE ONLY public.table_verb_item ALTER COLUMN id SET DEFAULT nextval('public.table_verb_item_id_seq'::regclass);
 A   ALTER TABLE public.table_verb_item ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            ~           2604    16457    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    16520    verb id    DEFAULT     b   ALTER TABLE ONLY public.verb ALTER COLUMN id SET DEFAULT nextval('public.verb_id_seq'::regclass);
 6   ALTER TABLE public.verb ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            0          0    16486    comment 
   TABLE DATA           U   COPY public.comment (id, text, publish_date, user_id, parent_comment_id) FROM stdin;
    public          postgres    false    221   ~:       ,          0    16465    exercise 
   TABLE DATA           4   COPY public.exercise (id, rating, name) FROM stdin;
    public          postgres    false    217   ;       .          0    16472    parent_comment 
   TABLE DATA           9   COPY public.parent_comment (id, exercise_id) FROM stdin;
    public          postgres    false    219   J;       2          0    16510    table_verb_item 
   TABLE DATA           F   COPY public.table_verb_item (id, translate, color_rarity) FROM stdin;
    public          postgres    false    223   k;       *          0    16454    user 
   TABLE DATA           B   COPY public."user" (id, login, email, role, password) FROM stdin;
    public          postgres    false    215   �;       4          0    16517    verb 
   TABLE DATA           ]   COPY public.verb (id, name, transcription, form, sound_path, table_verb_item_id) FROM stdin;
    public          postgres    false    225   �>       A           0    0    comment_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.comment_id_seq', 31, true);
          public          postgres    false    220            B           0    0    exercise_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.exercise_id_seq', 2, true);
          public          postgres    false    216            C           0    0    parent_comment_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.parent_comment_id_seq', 3, true);
          public          postgres    false    218            D           0    0    table_verb_item_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.table_verb_item_id_seq', 1, true);
          public          postgres    false    222            E           0    0    user_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.user_id_seq', 53, true);
          public          postgres    false    214            F           0    0    verb_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.verb_id_seq', 3, true);
          public          postgres    false    224            �           2606    16491    comment comment_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.comment DROP CONSTRAINT comment_pkey;
       public            postgres    false    221            �           2606    16470    exercise exercise_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.exercise
    ADD CONSTRAINT exercise_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.exercise DROP CONSTRAINT exercise_pkey;
       public            postgres    false    217            �           2606    16479 -   parent_comment parent_comment_exercise_id_key 
   CONSTRAINT     o   ALTER TABLE ONLY public.parent_comment
    ADD CONSTRAINT parent_comment_exercise_id_key UNIQUE (exercise_id);
 W   ALTER TABLE ONLY public.parent_comment DROP CONSTRAINT parent_comment_exercise_id_key;
       public            postgres    false    219            �           2606    16477 "   parent_comment parent_comment_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.parent_comment
    ADD CONSTRAINT parent_comment_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.parent_comment DROP CONSTRAINT parent_comment_pkey;
       public            postgres    false    219            �           2606    16515 $   table_verb_item table_verb_item_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.table_verb_item
    ADD CONSTRAINT table_verb_item_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.table_verb_item DROP CONSTRAINT table_verb_item_pkey;
       public            postgres    false    223            �           2606    16463    user user_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_email_key;
       public            postgres    false    215            �           2606    16461    user user_login_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_login_key UNIQUE (login);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_login_key;
       public            postgres    false    215            �           2606    16459    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    215            �           2606    16522    verb verb_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.verb
    ADD CONSTRAINT verb_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.verb DROP CONSTRAINT verb_pkey;
       public            postgres    false    225            �           2606    16497 &   comment comment_parent_comment_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_parent_comment_id_fkey FOREIGN KEY (parent_comment_id) REFERENCES public.parent_comment(id);
 P   ALTER TABLE ONLY public.comment DROP CONSTRAINT comment_parent_comment_id_fkey;
       public          postgres    false    219    221    3216            �           2606    16492    comment comment_user_id_fkey    FK CONSTRAINT     |   ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);
 F   ALTER TABLE ONLY public.comment DROP CONSTRAINT comment_user_id_fkey;
       public          postgres    false    221    3210    215            �           2606    16480 .   parent_comment parent_comment_exercise_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.parent_comment
    ADD CONSTRAINT parent_comment_exercise_id_fkey FOREIGN KEY (exercise_id) REFERENCES public.exercise(id);
 X   ALTER TABLE ONLY public.parent_comment DROP CONSTRAINT parent_comment_exercise_id_fkey;
       public          postgres    false    3212    219    217            �           2606    16523 !   verb verb_table_verb_item_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.verb
    ADD CONSTRAINT verb_table_verb_item_id_fkey FOREIGN KEY (table_verb_item_id) REFERENCES public.table_verb_item(id);
 K   ALTER TABLE ONLY public.verb DROP CONSTRAINT verb_table_verb_item_id_fkey;
       public          postgres    false    225    3220    223            0   x   x���A
�0F�ur�� �dRZ���D����$Z��B���܉U3F�,�z�~�]�p����	s�W�鍚���1�����d;C��з��߾�߸H�<nr�+;�+�����)<�      ,   4   x�3�4�0���.l��H�P����>��M@�� �Ŷ���p��qqq ��      .      x�3�4����� m       2   #   x�3��~a�Ŧ�x�������W� �T
�      *   �  x�}�Ɏ�PD��w�3�bf3�`cle6��g��$�h)J��T�ҹ%���k��#��8�E�q~C1� )��8a@W2��	����迡j��v�����0�\��FS��@�-�or����Z��ͽc�;B��|C��g�8�SVm�v�l�i5�\v����fv���~�
��"���(��
��y�_�^�M�@I�cY�O5.�eչ�~�LW_��[1���bq�Act��/׽��qbʣ�ZHB�8����NP�0J���j��B.��,�c���-Kel���r���֑#���;�'��g'�l�b6��9�p|�ee��F�ۅ��2���kIky"���8�S�'����MT��i��4,��0���V��X��b+p�"ٖ� ︙w$Ħ��3	���Q�|Hˮ�|ήt-{�G��b� [�~�
\k��ܶ}���PЅp�%�eZO�*���/���K�����R�l�����s�1��H7�93��&�)ޓ�kO�3�8Lo+kf"��}b�,�v���~~$|�4A�&�\A�:*�aմŝ�K]9qt���6�>���˲,��|k<N�����.�:jd��r���ű&��nP��#8�Ս�dG"��`�b�/o~�9�H�(�b��w������|9���qpY�;�$Nv�@�fP{�&!{s�Y���紃�V���L$�8�%���Z$�p�G0���E<�5ɞ/�Q[*�R^2�n)N���ÉP��`�]��!����      4   6   x�3�,JML�,�<=!�3̐3�4'�3Ə�*~|.P؈$d�,d����� �J     